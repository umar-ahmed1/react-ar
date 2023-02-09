import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export default function Test() {
    const loader = new GLTFLoader()
    return (
        <a-scene>
            <a-box 
                src="https://i.imgur.com/mYmmbrp.jpg" 
                position="-1 0.5 -3" 
                rotation="0 45 0" 
                color="#4CC3D9"
                animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 4000; loop: true"
            ></a-box>
            <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
            <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
            <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
            <a-entity environment="preset: forest; dressingAmount: 500"></a-entity>
            <a-sky color="#ECECEC"></a-sky>
        </a-scene>
    )
}

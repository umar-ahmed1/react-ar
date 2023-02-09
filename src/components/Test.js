import React from 'react'
import 'aframe'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three' 

export default function Test() {
    const loader = new GLTFLoader()
    return (
        <a-scene embedded arjs>
            <a-marker preset='hiro'>
                <a-box 
                    src="https://i.imgur.com/mYmmbrp.jpg" 
                    position="-1 0.5 -3" 
                    rotation="0 45 0" 
                    color="#4CC3D9"
                    animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 4000; loop: true"
                ></a-box>
            </a-marker>
            <a-marker-camera preset='hiro'></a-marker-camera>
            <a-entity camera></a-entity>
        </a-scene>
    )
}

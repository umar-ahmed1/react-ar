import React from 'react'
import 'aframe'

export default function Test() {
    return (
        <a-scene embedded arjs>
            <a-marker preset="hiro">
                <a-box color="blue" material="opacity: 1;" position="0 0.09 0" scale="0.4 0.8 0.8"></a-box>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    )
}




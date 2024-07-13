import React, {Suspense, useState, useEffect} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { animate, mix } from "framer-motion";

const Sketchbot = () => {
    const {scene, animations} = useGLTF('./sketchbot/scene.gltf');
    const [mixer] =useState(() => new THREE.AnimationMixer(scene));

    useEffect( () => {
        try{
            if(animations && animations.length>0 && mixer){
                const actions = animations.map(animation => mixer.clipAction(animation));
                actions.forEach(action => action.play());
            }
        }catch(error){
            console.error("Error initializing animations:",error);
        }        
    },[animations,mixer] );

    useFrame((state,delta) => {
        //Adjust multiplier to control playback speed
        try{
            if (mixer) mixer.update(delta*1);
        }catch(error){
            console.error("Error updating animation mixer:",error);
        }
    })

    return(
        <mesh>
            <ambientLight
                color={0xffffff}
                intensity={0.3}
            />
            <primitive
                object={scene}
                scale = {10}
                position = {[0,-3,1]}
                rotation = {[-0.01, -0.1, -0.1]}
            />
        </mesh>
    )

}

const SketchbotCanvas = () => {
    return(
        <Canvas
            shadows
            camera={{position: [0,20,6], fov:25}}
            gl={{
                preserveDrawingBuffer: true,
                toneMapping: THREE.LinearToneMapping,
                exposure: 0
                
            }}  
        >   
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom = {false}
                    maxPolarAngle={Math.PI/2}
                    minPolarAngle={Math.PI/2}
                />
                <ambientLight
                    color={0xffffff}
                    intensity={0.3}
                />
                <directionalLight
                    intensity={2.5}
                    color={0xffffff}
                    position={[5,5,5]}
                    castShadow
            />
                <Sketchbot/>
            </Suspense>
            <Preload all/>
        </Canvas>    
        
    )
}

export default SketchbotCanvas;
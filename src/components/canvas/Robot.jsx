import React, {Suspense,useEffect, useState} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Robot = ({isMobile}) => {
    const {scene,animations} = useGLTF('./animated_robot_sdc/scene.gltf')
    const [mixer] = useState(() => new THREE.AnimationMixer(scene));

    useEffect(() => {
        try{
            if (animations && animations.length>0 && mixer) {
                const actions = animations.map(animation => mixer.clipAction(animation));
                actions.forEach(action => action.play());
            }
        }catch(error){
            console.error("Error initializing animations:",error);
        }
    }, [animations,mixer]);

    useFrame((state,delta) => {
        //Adjust the multiplier to control playback speed
        try{
            if (mixer) mixer.update(delta*1); 
        }catch(error){
            console.error("Error updating animation mixer:",error);
        }
    });

    useEffect(() => {

    })

    return (
        <mesh>
            <ambientLight
                color={0x444444}
                intensity={10}
            />
            <primitive
                object = {scene}
                scale = {isMobile ? 0.7 : 1.25}
                position = {isMobile ? [0,-3,-1] : [0,1.3,0]}
                rotation = {[-0.01, -0.1,-0.1]}
            />
        </mesh>
    )
}

const RobotCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        //Set the initial value of the 'isMobile state variable
        setIsMobile(mediaQuery.matches);

        //Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        //Add a callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change",handleMediaQueryChange);

        //Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change",handleMediaQueryChange);
        };
    }, []);

    return(
        <Canvas
            shadows
            camera={{position: [20,3,5], fov:25}}
            gl = {{
                preserveDrawingBuffer:true,
                toneMapping: THREE.LinearToneMapping,
                exposure: 0,
                clearColor: 0x444444,
            }}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom = {false}
                    maxPolarAngle={Math.PI/2}
                    minPolarAngle={Math.PI/2}
                />
                <ambientLight intensity={0.8} color="#ffffff"/>
                <directionalLight
                    intensity={2.5}
                    color='#ffffff'
                    position={[5,5,5]}
                    castShadow
                />
                <Robot isMobile={isMobile}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )

}

export default RobotCanvas;
import {React, useRef, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

export const TogglePictures = () => {
    // className="gray-scale"
    const [isShown, setIsShown] = useState();
    const imgOneRef = useRef()
    const imgTwoRef = useRef()
    useEffect(()=>{
        [imgOneRef, imgTwoRef].forEach((img) => {
            img.current.addEventListener("mouseenter", ()=> {
                setIsShown(true)
                img.current.classList.add("gray-scale")
            });
            img.current.addEventListener("mouseleave", ()=> {
                setIsShown(false)
                img.current.classList.remove("gray-scale")
            });

        });
    },[]);
    return (
    <div className="container">
        <div>
            <img 
            alt='pokemon1' 
            ref={imgOneRef} 
            src="https://www.pngfind.com/pngs/m/51-515765_pikachu-kawaii-png-cutest-ever-pokemon-transparent-png.png"
            />
        </div>
            <div>
                <img 
                alt='pokemon2' 
                src="https://www.cppng.com/file/download/2020-06/37475-6-pikachu-transparent-image.png"
                ref={imgTwoRef}
                />
            </div>
        </div>
        )
}
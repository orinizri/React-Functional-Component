import React, { useRef } from 'react'

export function Video(props) {
    const vidRef = useRef(null);
    const handlePlayVideo = () => {
        vidRef.current.play();
    }
    const handlePauseVideo = () => {
        vidRef.current.pause();
    }

    return (
        <>
            <video ref={vidRef}>
                <source ref={vidRef} src='https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-a-mountain-41576-large.mp4' type="video/mp4" />
            </video>
            <button onClick={handlePlayVideo}>PLAY</button>
            <button onClick={handlePauseVideo}>PAUSE</button>
        </>
    )
}

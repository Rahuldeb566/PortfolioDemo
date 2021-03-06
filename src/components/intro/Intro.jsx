import React from 'react';
import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {

        init(textRef.current, { showCursor: false, backDelay: 1500, backSpeed: 60, showCursor: true, strings: ['Web Developer.', 'React Developer.' ] })

    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/me.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Rahul Deb</h1>
                    <h3>Full Stack <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
            
        </div>
    )
}

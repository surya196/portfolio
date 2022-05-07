import React, { useEffect, useState } from 'react'
import pdf from '../../assets/surya.pdf';
import AnimatedLetters from '../AnimatedLetters'
import {
    faMedium,
    faCss3,
    faFigma,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')

        }, 3000);
    }, [])
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', " ", 'm', 'e']} idx={15} letterClass={letterClass} />

                    </h1>
                    <p>
                        I'm very ambitious front-end developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quietly confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person,  a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
                    </p>
                    <a href={pdf} download >Download CV</a>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className="face1">
                            <FontAwesomeIcon icon={faMedium} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>

                        <div className="face6">
                            <FontAwesomeIcon icon={faFigma} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader />
        </>
    )
}

export default About
import React, { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_47nf96l', 'template_agjtwcc', refForm.current, '212-iNEGwhQmfOUuP').then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')

        }, 4000);
    }, [])
    return (
        <div className='container contact-page'>
            <div className='text-zone' >
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />

                </h1>
                <p>
                    I am interested in full-time opportunities - especially ambitious or
                    large projects. However, if you have other request or question,
                    don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form onSubmit={sendEmail} ref={refForm}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />

                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />

                            </li>
                            <li >
                                <input type='text' name='subject' placeholder='Subject' />

                            </li>
                            <li >
                                <textarea placeholder='Message' name='message'>

                                </textarea>

                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map' >
                surya
                <br />
                india
                <br />
                mill street, velur, <br />
                thiruthurai poondi,
                <span>
                    surya.m19698@gmail.com
                </span>
            </div>
            <div className='map-wrapper' >
                <MapContainer center={[10.5251,79.6362]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[10.5251,79.6362]}>
                        <Popup>I'm here :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default Contact
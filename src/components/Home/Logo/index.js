import React from 'react'
import surya from '../../../assets/images/surya.png'
import './index.scss'

const Logo = () => {
 
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={surya} />
          
        </div>
    )
}

export default Logo
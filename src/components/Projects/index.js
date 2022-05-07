import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
// import proj1 from ''
import Project1 from '../../assets/images/notes.jpg'
import Project2 from '../../assets/images/chat.jpg'
import Project3 from '../../assets/images/weather.jpg'
import Project4 from '../../assets/images/calculator.jpg'
import Project5 from '../../assets/images/figma.jpg'
import Project6 from '../../assets/images/portfolioimg.png'

import './index.scss'

const Project = () => {
    const Projectlist = [
        {
            cardimg: Project1,
            cardname: 'Notes App',
            cardlang: 'Flutter&dart',
            cardDes: 'Flutter app to take notes.',
            cardlink: 'https://github.com/surya196/Notes'




        },
        {
            cardimg: Project2,
            cardname: 'freeChat',
            cardlang: 'Flutter&dart',
            cardDes: 'Simple flutter app. used firebase for storing the message. used provider for state-management.',
            cardlink: 'https://github.com/surya196/freechat'


        },
        {
            cardimg: Project3,
            cardname: 'weather App',
            cardlang: 'Flutter&dart',
            cardDes: 'this is a simple flutter app for weather forecasting.this app used openweather API to get real time data for it. contains two pages',
            cardlink: 'https://github.com/surya196/Weatherapp'


        },
        {
            cardimg: Project4,
            cardname: 'BMI calculator',
            cardlang: 'Flutter&dart',
            cardDes: 'this is a simple flutter app to calculate a persons BMI.it is a single page application',
            cardlink: 'https://github.com/surya196/BMIcalculater'


        },
        {
            cardimg: Project5,
            cardname: 'card design',
            cardlang: 'figma',
            cardDes: 'simple  linkedin card post. ',
            cardlink: 'https://www.linkedin.com/posts/surya-m-b882101bb_destructuring-in-javascript-activity-6911313185358712832-GAoQ?utm_source=linkedin_share&utm_medium=member_desktop_web',
        },
        {
            cardimg: Project5,
            cardname: 'card design',
            cardlang: 'figma',
            cardDes: 'simple  linkedin card post.',
            cardlink: 'https://www.linkedin.com/posts/surya-m-b882101bb_flutter-widgets-activity-6889851892583809024-2Y2g?utm_source=linkedin_share&utm_medium=member_desktop_web',
        },
        {
            cardimg: Project5,
            cardname: 'card design',
            cardlang: 'figma',
            cardDes: 'to take notes',
            cardlink: 'https://www.linkedin.com/posts/surya-m-b882101bb_delivery-app-activity-6875824552467927040-bOKI?utm_source=linkedin_share&utm_medium=member_desktop_web',
        },
        {
            cardimg: Project5,
            cardname: 'mobile app  design',
            cardlang: 'figma',
            cardDes: 'simple delivery mobile app  design using figma. it contains five pages.',
            cardlink: 'https://www.linkedin.com/posts/surya-m-b882101bb_delivery-app-activity-6875824552467927040-bOKI?utm_source=linkedin_share&utm_medium=member_desktop_web',
        },
        {
            cardimg: Project6,
            cardname: 'portfolio',
            cardlang: 'Html, css, react',
            cardDes: 'personal website ',
            cardlink: 'https://www.linkedin.com/posts/surya-m-b882101bb_delivery-app-activity-6875824552467927040-bOKI?utm_source=linkedin_share&utm_medium=member_desktop_web',
        },
    ]
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')

        }, 4000);
    }, [])
    return (
        <div className='container project-page' >
            <div className='text-zone' >
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'w', 'o', 'r', 'k', 's']} idx={15} />

                </h1>

            </div>
            <div className='project-card-wrapper row' >
                {
                    Projectlist.map((data, index) => (
                        <div key={index} className='col-s-12 col-4 card'>
                            <div className='project-card'>
                                <img src={data.cardimg} />
                                <h1>
                                    {data.cardname}
                                </h1>
                                <h1>
                                    {data.cardlang}
                                </h1>
                                <p>{data.cardDes}</p>
                                <a href={data.cardlink}>Know more</a>



                            </div>

                        </div>

                    ))
                }




            </div>


        </div>
    )
}

export default Project
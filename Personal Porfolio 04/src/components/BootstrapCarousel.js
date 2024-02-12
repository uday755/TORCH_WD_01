import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function BootstrapCarousel() {
    return (

        <>
            <marquee height='25px' scrollamount='10' direction="left"><h5 style={{color:'red'}}> This Website is Under Construction. Navigation Bar Buttons,Contact Form are not Working . Information provided in up to the date. You will see a Better version Very Soon.</h5></marquee>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{height : '70vh' , width : '100vw'}}
                        src="./images/1.jpg"
                        alt='First Slide'
                    />
                    <Carousel.Caption>
                        <h3>Welcome to my Portfolio - built for programmers</h3>
                        <p className='text-info'>"Code can make you God or can take you on Road"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{height : '70vh' , width : '100vw'}}
                        src="./images/2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>A developer can understand a developer</h3>
                        <p className='text-success'>"Code Never Lies ,Comments Sometimes Do" --- Ron Jeffries</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{height : '70vh' , width : '100vw'}}
                        src="./images/3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Life for Code , Code for Life</h3>
                        <p className='text-warning'>"First Solve the Problem , Then write the Code" --- Martin Flower</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    )
}

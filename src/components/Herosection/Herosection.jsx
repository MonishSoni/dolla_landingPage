import React, { useState } from 'react'
import { ArrowF, ArrowR, Button, HeroBg, HeroBtn, HeroContainer, HeroContent, HeroH, HeroP, VideoBg } from './Style';
import Video from '../../video/video.mp4'

const Herosection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH>Virtual Banking Made Easy</HeroH>
                <HeroP>Sign up for new account today and receive $250 in credit towards your next payment</HeroP>
                <HeroBtn>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowF /> : <ArrowR />}
                    </Button>
                </HeroBtn>
            </HeroContent>
        </HeroContainer>
    )
}

export default Herosection
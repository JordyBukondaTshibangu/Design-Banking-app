import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight } from './HeroSectionElement';
import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4'

const HeroSection = () => {

    const [hover, setHover ] = useState(false);

    const onHover = () => { 
      setHover(!hover)
      console.log(hover);
    }

  return (
  <HeroContainer>
    <HeroBg>
      <HeroContent>
              <HeroH1>Virtual Banking made easy</HeroH1>
              <HeroP>
                  Sign up for a new account today and receive $250 in credit towards your next payment.
              </HeroP>
              <HeroButtonWrapper>
                  <Button 
                    to='sign-up' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    onMouseOver={onHover}
                    primary='true'
                    dark='true'
                    >
                      Get started { hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
              </HeroButtonWrapper>
          </HeroContent>
          <VideoBg autoPlay loop src={Video} type='video'/>
    </HeroBg>
  </HeroContainer>);
};

export default HeroSection;
 
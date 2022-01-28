import React from 'react';
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper,InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ButtonWrap, ImgWrapper, Img } from './InfoElement';

const InfoSection = ({
  lightBg,
  id,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText}) => {

  return (
  <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
          <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <ButtonWrap>
                        <Button 
                          to='home' 
                          smooth={true} 
                          duration={500} 
                          spy={true} 
                          exact='true'
                          offset={-80} 
                          primary={primary ? 1 : 0}
                          dark={dark ? 1 : 0}
                          >
                            {buttonLabel}
                          </Button>
                    </ButtonWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrapper>
                    <Img src={img} alt={alt} />
                </ImgWrapper>
              </Column2>
          </InfoRow>
      </InfoWrapper>
  </InfoContainer>
  );
};

export default InfoSection;

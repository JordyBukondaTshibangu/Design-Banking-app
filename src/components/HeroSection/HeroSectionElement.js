import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
    background-color : #0C0C0C;
    display : flex;
    justify-content : center;
    align-items : center;
    height : 800px;

    :before {
        content : '';
        position : absolute;
        top : 0;
        right : 0;
        bottom : 0;
        left : 0;
        background : linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%),
            linear-gradient(
                180deg,
                rgba(0,0,0,0.2) 0%,
                transparent 100%);
            )
    }
`;

export const HeroBg = styled.div`
    width : 100%;
    height : 100%;
    overflow : hidden;
    position : relative;
`;

export const VideoBg = styled.video`
    width : 100%;
    height : 100%;
    object-fit : cover;
    -o-object-fit : cover;
    background : #232A34; 
`;


export const HeroContent = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    color : #FFF;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 50px;
    align-items : center;
`

export const HeroH1 = styled.h1`
    color : #FFF;
    font-size : 2rem;
    text-align : center;
    width : 100%;

    @media screen and (min-width : 768px){
        font-size : 2.8rem
    }
    
    @media screen and (min-width : 768px){
        font-size : 3rem
    }

`
export const HeroP = styled.p`
    margin-top : 24px;
    color : #FFF;
    font-size : 1.1rem;
    text-align : center;
    width : 100%;

    @media screen and (min-width : 768px){
        font-size : 1.4rem;
    }
    
    @media screen and (min-width : 768px){
        font-size : 1.6rem;
    }
`;

export const HeroButtonWrapper = styled.div`
    margin-top : 32px;
    display : flex;
    flex-direction : column;
    align-items : center;
    cursor : pointer;
`;
export const ArrowForward = styled(MdArrowForward)`
    margin-left : 8px;
    font-size : 1.25rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left : 8px;
    font-size : 1.25rem;
`;
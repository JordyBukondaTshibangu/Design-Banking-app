import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height : 1300px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background : #010606;

    @media screen and (min-width : 480px){
        height : 1100px
    }
    @media screen and (min-width : 768px){
        height : 800px
    }
`;

export const ServicesWrapper = styled.div`
    max-width : 1000px;
    margin : 0 auto;
    display : grid;
    grid-template-columns : 1fr;
    align-items : center;
    gap : 16px;
    padding : 0 20px;

    @media screen and (min-width : 769px){
        grid-template-columns : 1fr 1fr;
    }

    @media screen and (min-width : 1000px){
        grid-template-columns : 1fr 1fr 1fr;
        padding : 0 50px;
    }
`;
export const ServicesCard = styled.div`
    background : #FFF;
    display : flex;
    flex-direction : column;
    align-items: center;
    border-radius : 10px;
    max-height : 340px;
    padding : 30px;
    box-shadow : 0 1px 3px rgba(0,0,0,0.2);
    
    &:hover {
        transform : scale(1.02);
        transition : all 0.2s ease-in-out;
        cursor : pointer;
    }
`;
export const ServicesIcon = styled.img`
    height : 160px;
    width : 160px;
    margin-bottom : 10px
`;

export const ServicesH1 = styled.h1`
    font-size : 2rem;
    color : #FFF;
    margin-bottom : 64px;

    @media screen and (min-width : 480px){
        font-size : 2.5rem
    }
`;

export const ServicesH2 = styled.h2`
    fonrt-size : 1rem;
    margin-bottom : 10px
`;
export const ServicesP = styled.p`
    font-size : 1rem;
    text-align : center;
`;

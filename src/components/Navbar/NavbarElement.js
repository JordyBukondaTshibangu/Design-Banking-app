import styled from 'styled-components'
import { Link as LinkRouter} from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background-color : ${({scrollNav}) => scrollNav ? '#000' : 'transparent'};
    color : #FFF;
    heght : 80px;
    margin-top : -80px;
    display : flex;
    justify-content : center;
    font-size : 1rem;
    position : sticky;
    top : 0;
    z-index : 10;

    @media screen and (max-width : 960px){
        transition  : 0.8s all ease;
    }
`;
export const NavContainer = styled.div`
    display : flex;
    justify-content : space-between;
    height : 80px;
    z-index : 1;
    width : 100%;
    padding : 0 24px;
    max-width : 1100px;
`;
export const NavLogo = styled(LinkRouter)`
    text-decoration : none;
    color : #FFF;
    justify-self : flex-start;
    cursor : pointer;
    font-size : 1.5rem;
    display : flex;
    align-items : center;
    margin-lfet : 24px;
    font-weight : bold;
`;

export const MobileIcon = styled.div`
    display : block;
    position : absolute;
    top : 0;
    right : 0;
    transform : translate(-100%, 60%);
    font-size : 1.8rem;
    cursor : pointer;

    @media screen and (min-width:768px){
        display : none;
    }

`;
export const NavMenu = styled.ul`
    display : none;

    @media screen and (min-width:768px){
        display : flex;
        align-items : center;
        list-style : none;
        text-align : center;
        margin-right : -22px
    }
`;
export const NavItem = styled.div``;
export const NavLinks = styled(LinkScroll)`
    color : #FFF;
    display : flex;
    align-items : center;
    text-decoration : none;
    height : 100%;
    padding :  1rem;
    cursor : pointer;

    &.active {
        border-bottom : 3px solid #01BF71;
    }
`;

export const NavButton = styled.nav`
    display : none;

    @media screen and (min-width:768px){
        display : flex;
        align-items : center;
    }
`;
export const NavButonLink = styled(LinkRouter)`
    border-radius : 50px;
    background-color : #01BF71;
    white-sapce : nowrap;
    padding : 10px 22px;
    color : #010606;
    font-size : 16px;
    font-weight : bold;
    outline : none;
    border : none;
    cursor : pointer;
    transition : all 0.2s ease-in-out;
    text-decoration : none;

    &:hover {
        transition : all 0.2s ease-in-out;
        background : #FFF;
        color : #010606;
    }

`;
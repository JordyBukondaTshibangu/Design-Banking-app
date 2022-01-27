import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


export const SideContainer = styled.aside`
    position : fixed;
    z-index : 999;
    width : 100%;
    height : 100%;
    background : #0D0D0D;
    display : grid;
    align-items : center;
    top : 0;
    left : 0;
    transition : 0.5s ease-in-out;
    opacity : ${({isOpen}) => isOpen ? '100%' : '0'};
    top : ${({isOpen}) => isOpen ? '0' : '-100%'}
`

export const CloseIcon = styled(FaTimes)`
    color : #FFF
`

export const Icon = styled.div`
    position : absolute;
    top : 1.2rem;
    right : 1.5rem;
    background : transparent;
    font-size : 2rem;
    cursor : pointer;
    outline : none;
`

export const SidebarWrapper = styled.div`
    color : #FFF;
`;

export const SidebarMenu = styled.ul`
    display : flex;
    flex-direction : column;
    gap : 1.5rem;
    list-style : none
`;

export const SidebarLink = styled(LinkScroll)`
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 1.5rem;
    text-decoration : none;
    transition : 0.2s ease-in-out;
    cursor : pointer

    &:hover {
        color : #01BF71;
        transition : 0.2s ease-in-out;
    }
    
`;

export const SideBtnWrap = styled.div`
    display : flex;
    justify-content : center;
    margin-top : 6rem;
`;

export const SidebarRoute = styled(LinkRouter)`
    border-radius : 50px;
    background : #01BF71;
    white-space: nowrap;
    padding : 16px 64px;
    color : #010606;
    font-size : 16px;
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
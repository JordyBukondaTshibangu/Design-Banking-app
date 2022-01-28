import React, { useEffect, useState } from 'react';
import { FaBars} from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll'
import { NavContainer,
  Nav, 
  NavLogo, 
  NavItem, 
  NavMenu, 
  MobileIcon, 
  NavLinks,
  NavButton,
  NavButonLink 
} from './NavbarElement';
import SideBar from '../Sidebar';


const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ scrollNav, setScrollNav ] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNav);
  }, []);
  
  return (
  <>
    <Nav scrollNav={scrollNav}>
        <NavContainer>
            <NavLogo to='/' onClick={() => { scroll.scrollToTop()}}>TshibsFy</NavLogo>
            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </MobileIcon>
            { 
              isOpen && <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            }
            <NavMenu>
              <NavItem>
                <NavLinks spy={true} smooth='true' to='about'>About Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks spy={true} smooth='true' to='services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks spy={true} smooth='true' to='discover'>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks spy={true} smooth='true' to='contactus'>Contact Us</NavLinks>
              </NavItem>
            </NavMenu>
            <NavButton>
              <NavButonLink  to='/sign-in'>Sign In</NavButonLink>
            </NavButton>
        </NavContainer>
    </Nav>
  </>
  );
};

export default Navbar;

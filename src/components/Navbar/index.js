import React, { useState } from 'react';
import { FaBars} from 'react-icons/fa';
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
  return (
  <>
    <Nav>
        <NavContainer>
            <NavLogo to='/'>TshibsFy</NavLogo>
            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </MobileIcon>
            { 
              isOpen && <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            }
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>About Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='discover'>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contact-us'>Contact Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='sign-up'>Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavButton>
              <NavButonLink to='sign-in'>Sign In</NavButonLink>
            </NavButton>
        </NavContainer>
    </Nav>
  </>
  );
};

export default Navbar;

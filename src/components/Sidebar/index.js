import React from 'react';
import { SideContainer, CloseIcon, Icon, SideBtnWrap, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from './SideBarElement';

const SideBar = ({isOpen, setIsOpen}) => {
  return (
  <SideContainer isOpen={isOpen}>
      <Icon onClick={() => setIsOpen(false)}>
          <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='about'>About</SidebarLink>
            <SidebarLink to='services'>Services</SidebarLink>
            <SidebarLink to='discover'>Discover</SidebarLink>
            <SidebarLink to='contact-us'>Contact Us</SidebarLink>
            <SidebarLink to='sign-up'>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='sign-in'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
  </SideContainer>);
};

export default SideBar;

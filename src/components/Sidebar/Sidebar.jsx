import React from 'react';
import { CloseIcon, Icon, SidebarBtn, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from './style';

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon onClick={toggle}>
                    <CloseIcon  />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                        <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                        <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                        <SidebarLink to='signup' onClick={toggle}>Signup</SidebarLink>
                    </SidebarMenu>
                    <SidebarBtn>
                        <SidebarRoute>Sign In</SidebarRoute>
                    </SidebarBtn>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
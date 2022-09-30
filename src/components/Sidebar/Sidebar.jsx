import React from 'react';
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './style';

const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <Icon>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about'>About</SidebarLink>
                        <SidebarLink to='discover'>Discover</SidebarLink>
                        <SidebarLink to='services'>Services</SidebarLink>
                        <SidebarLink to='signup'>Signup</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
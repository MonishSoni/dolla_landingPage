import React from 'react';
import { Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, Navitem, Navlinks,NavBtn,NavBtnlink } from './style';
import { HiMenuAlt2 } from "react-icons/hi";


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    {/* logo ======================== */}
                    <Navlogo to='/'>dolla</Navlogo>
                    {/* menu =========================*/}
                    <NavMenu>
                        <Navitem><Navlinks to='about'>About</Navlinks></Navitem>
                        <Navitem><Navlinks to='discover'>Discover</Navlinks></Navitem>
                        <Navitem><Navlinks to='services'>Services</Navlinks></Navitem>
                        <Navitem><Navlinks to='signup'>Signup</Navlinks></Navitem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnlink to='/signin'>Sign In</NavBtnlink>
                    </NavBtn>
                    {/* icon ========================== */}
                    <MobileIcon onClick={toggle}>
                        <HiMenuAlt2 />
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
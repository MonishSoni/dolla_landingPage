import React, { useState } from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar/Navbar"
import Herosection from '../components/Herosection/Herosection';
import Infosection from '../components/Infosection/Infosection';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Herosection/>
            <Infosection/>
        </>
    )
}

export default Home
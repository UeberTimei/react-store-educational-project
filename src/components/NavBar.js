import React from 'react';
import {NavLink} from 'react-router-dom';
import {SHOP_ROUTE} from '../utils/consts';
import logo from '../images/logo.png'
import '../index.css';
import { observer } from 'mobx-react-lite';
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { useState } from 'react';
import NavbarMenu from './NavbarMenu';

const NavBar = observer(() => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <nav className='shadow-md w-full fixed top-0 left-0 bg-cyan-200 opacity-80 z-50 select-none'>
            <div className='md:flex py-1 px-3 container mx-auto md:justify-end flex-wrap'>
                <div className='flex justify-between md:mr-auto w-full lg:w-auto'>
                    <NavLink to={SHOP_ROUTE}><img className='navbar' src={logo} width='140' alt="Savinatti"/></NavLink>
                    <button className='lg:hidden flex justify-end items-center p-2' onClick={handleClick}>
                        {click ? <IoClose size={40}/> :  <IoMenuOutline size={40}/>}
                    </button>
                </div>

                <NavbarMenu show={click} onHide={() => setClick(false)}/>
            </div>
        </nav>
    );
});

export default NavBar;
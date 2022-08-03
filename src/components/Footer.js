import React from 'react';
import { NavLink } from 'react-router-dom';
import {HELP_ROUTE, TG_ROUTE, TWITTER_ROUTE, VK_ROUTE} from '../utils/consts'
import logo from '../images/logo.png'
import '../index.css';

const Footer = () => {
    return (
        <div className='bottom-96'>
            <footer className='grid md:flex grid-flow-row md:grid-cols-3 md:grid-rows-1 md:gap-16 w-full h-auto bg-cyan-200 justify-center text-xl flex-1'>
                <div className='grid grid-flow-row justify-center mt-3 md:mt-0'>
                    <span className='flex justify-center font-medium'>Помощь</span>
                    <ul className='mt-1 md:mb-20'>
                        <li>
                            <NavLink to={HELP_ROUTE}>
                                How to make order
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <br />
                <div className='grid grid-flow-row justify-center mt-3'>
                    <span className='flex justify-center font-medium'>Setvice</span>
                    <div className='flex mt-3 justify-between md:mb-14'>
                        <a href={TG_ROUTE}>
                            <svg xmlns="http://www.w3.org/2000/svg"  className='mr-2 transition hover:scale-125 ease-in cursor-pointer' viewBox="0 0 48 48" width="64px" height="64px"><path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"/><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"/><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"/><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"/></svg>
                        </a>
                        <a href={TWITTER_ROUTE}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="64px" height="64px"><path fill="#03a9f4" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"/></svg>
                        </a>
                    </div>
                </div>
                <div className='flex mt-4 justify-center md:justify-end shrink md:h-40'>
                    <img className='w-5/12 md:w-full' src={logo} alt="Savinatti"/>
                </div>
            </footer>
        </div>
        
    );
};

export default Footer;
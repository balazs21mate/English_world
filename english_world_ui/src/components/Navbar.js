import React, {useState} from 'react';
import {MenuIcon} from '@heroicons/react/solid';
import {XCircleIcon} from '@heroicons/react/outline';

import { Outlet, Link } from "react-router-dom";

function Navbar(props){
    const [navbarMenu, setNavbarMenu] = useState(false)

    const set_navbar_menu_true = () => {
        setNavbarMenu(true)
    }

    const set_navbar_menu_false = () => {
        setNavbarMenu(false)
    }

    return(
        <div className="w-screen fixed top-0 z-10 p-5 flex flex-col text-secondary_color bg-primary">
            <div className="flex justify-between ">
                <Link to="/" className='w-[10rem] md:w-[15rem] lg:w-80'><div className={`text-lg md:text-4xl shadow-card flex justify-center items-center text-secondary_color w-full italic h-full bg-white lg:p-2 border-solid border underline decoration-black-solid border-black decoration-solid rounded-lg mb-8 -rotate-1`}><div className='rotate-1'>English World</div></div></Link>
                <div className="hidden md:flex items-center text-2xl">
                    <Link to="/" className="mr-5 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/">Cards</Link>
                    <Link to="/memory_game" className="mr-5 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/">Memory Game</Link>
                    <Link to="/grammar" className="mr-5 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/">Grammar</Link>
                </div>
                <MenuIcon className={`w-7 cursor-pointer ${navbarMenu? "hidden": "block"} md:hidden`} onClick={set_navbar_menu_true}/>
                <XCircleIcon className={`w-7 cursor-pointer ${navbarMenu? "block": "hidden"} md:hidden`} onClick={set_navbar_menu_false}/>
            </div>
            <div className={`${navbarMenu? "flex": "hidden"} flex-col items-end mt-5 md:hidden text-2xl`}>
                <hr className='w-full mb-2 border-b-solid border-secondary_color'></hr>
                <Link to="/" className="p-1 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/" onClick={set_navbar_menu_false}>Cards</Link>
                <Link to="/memory_game" className="p-1 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/" onClick={set_navbar_menu_false}>Memory Game</Link>
                <Link to="/grammar" className="p-1 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/" onClick={set_navbar_menu_false}>Grammar</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Navbar
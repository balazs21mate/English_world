import React, {useState} from 'react'
import {MenuIcon} from '@heroicons/react/solid'
import {XCircleIcon} from '@heroicons/react/outline'

function Navbar(props){
    const [navbarMenu, setNavbarMenu] = useState(false)

    const set_navbar_menu_true = () => {
        setNavbarMenu(true)
    }

    const set_navbar_menu_false = () => {
        setNavbarMenu(false)
    }

    return(
        <div className="w-screen fixed top-0 z-10 p-5 flex flex-col text-secondary_color bg-primery">
            <div className="flex justify-between ">
                <a href="/" className="text-4xl sm:text-5xl">English World</a>
                <div className="hidden md:flex items-center text-2xl">
                    <a className="mr-5 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/">Cards</a>
                    <a className="mr-5 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/">Memory Game</a>
                    <a className="mr-5 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/">Grammar</a>
                </div>
                <MenuIcon className={`w-7 cursor-pointer ${navbarMenu? "hidden": "block"} md:hidden`} onClick={set_navbar_menu_true}/>
                <XCircleIcon className={`w-7 cursor-pointer ${navbarMenu? "block": "hidden"} md:hidden`} onClick={set_navbar_menu_false}/>
            </div>
            <div className={`${navbarMenu? "flex": "hidden"} flex-col items-end mt-5 md:hidden text-2xl`}>
                <hr className='w-full mb-2 border-b-solid border-secondary_color'></hr>
                <a className="p-1 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/">Cards</a>
                <a className="p-1 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/">Memory Game</a>
                <a className="p-1 text-nav_menu hover:text-nav_menu_hover transition-colors" href="/">Grammar</a>
            </div>
        </div>
    );
}

export default Navbar
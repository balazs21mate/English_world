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
        <div className="w-screen fixed top-0 p-5 text-secondary_color flex flex-col bg-primery">
            <div className="flex justify-between ">
                <a href="/" className="text-6xl">English world</a>
                <div className="hidden md:flex items-center text-2xl">
                    <a className="mr-2 md:hover:border-b-solid md:hover:border-b-2 md:hover:border-b-secondary_color" href="/">Cards</a>
                    <a className="mr-2 md:hover:border-b-solid md:hover:border-b-2 md:hover:border-b-secondary_color" href="/">Practice</a>
                </div>
                <MenuIcon className={`w-7 ${navbarMenu? "hidden": "block"} md:hidden`} onClick={set_navbar_menu_true}/>
                <XCircleIcon className={`w-7 ${navbarMenu? "block": "hidden"} md:hidden`} onClick={set_navbar_menu_false}/>
            </div>
            <div className={`${navbarMenu? "flex": "hidden"} flex-col items-center mt-5 md:hidden text-2xl`}>
                <hr className='w-[80%] mb-2 border-b-solid border-secondary_color'></hr>
                <a className="p-1 md:hover:border-b-solid md:hover:border-b-2 md:hover:border-b-secondary_color" href="/">Cards</a>
                <a className="p-1 md:hover:border-b-solid md:hover:border-b-2 md:hover:border-b-secondary_color" href="/">Practice</a>
            </div>
        </div>
    );
}

export default Navbar
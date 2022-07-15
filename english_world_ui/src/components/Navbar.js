import './navbar.css'

function Navbar(){
    return(
        <div className="w-screen fixed top-0 p-5 text-secondary_color flex flex-col bg-primery">
            <div className="flex justify-between ">
                <a href="/" className="text-3xl">English world</a>
                <div className="hidden md:flex text-2xl">
                    <a className="mr-2 hover:border-b-solid hover:border-b-2 hover:border-b-secondary_color" href="/">Cards</a>
                    <a className="mr-2 hover:border-b-solid hover:border-b-2 hover:border-b-secondary_color" href="/">Practice</a>
                </div>
            </div>
            <div className="flex flex-col items-center my-2 md:hidden text-2xl">
                <a className="hover:border-b-solid hover:border-b-2 hover:border-b-secondary_color" href="/">Cards</a>
                <hr></hr>
                <a className="hover:border-b-solid hover:border-b-2 hover:border-b-secondary_color" href="/">Practice</a>
            </div>
        </div>
    );
}

export default Navbar
import './navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <h1 className="logo">English world</h1>
            <div className="menu">
                <p><i class="fa-solid fa-bars"></i></p>
                <p>Home</p>
                <p>Cards</p>
                <p>Practice</p>
            </div>
        </div>
    );
}

export default Navbar
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
const logo = new URL('../assets/logo.png', import.meta.url);
import { useState } from 'react';
// import '../style.css';
// import '../responsiveness.css'
import "../index.css"
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext.js';
import { useSelector } from 'react-redux';
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [login, setLogin] = useState('login');

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext)

    const cartItems = useSelector((store)=> store.cart.items)
    return(
        <header className="header h-16 bg-amber-50 border flex justify-between items-center px-4 lg:px-8">
            <div className="logo-container">
                <img className='h-12' id='logo' src={logo} alt="logo"/>
            </div>
            <button type='button' className='toggle-menu md:hidden' onClick={()=> setOpenMenu(true)}>☰</button>
            {openMenu && (<div className={`overlay ${openMenu? 'fixed inset-0 bg-black/50 backdrop-blur-xs': ""}`}></div>)}

            <div className={`mobile-menu w-64 fixed top-2.5 right-2.5 bg-white rounded-lg shadow-lg ${openMenu? '': "hidden"} md:hidden`}>
                <div className='menu-header flex justify-between p-4 border-b'>
                    <h2 className='text-lg font-bold'>Menu</h2>
                    <button className={``} onClick={()=> setOpenMenu(false)}>X</button>
                </div>
                <nav className='menu-nav p-4 border-b'>
                        <ul>
                            <Link to="/" className='block pb-4'>
                                <li>Home</li>
                            </Link>
                            <Link to="/About" className='block pb-4'>
                                <li>About</li>
                            </Link>
                            <Link to="/contact" className='block pb-4'>
                                <li>Contact</li>
                            </Link>
                            <a to="/">
                                <li>Cart</li>
                            </a>
                        </ul>
                    </nav>
                    <div className='menu-footer flex justify-between p-4'>
                        <button className='login-btn btn py-1.5 px-5 border rounded-lg'>Login</button>
                        <button className='signin-btn btn py-1.5 px-5 border rounded-lg'>Signin</button>
                    </div>
            </div>

            <div className='nav-container hidden md:flex'>
                <ul className='nav-items md:flex gap-6'>
                    <li className='hover:text-orange-500'>Online: {onlineStatus? "🟢": "🔴"} </li>
                    <li className='hover:text-orange-500'><Link to='/'>Home</Link></li>
                    <li className='hover:text-orange-500'><Link to='/About'>About US</Link></li>
                    <li className='hover:text-orange-500'><Link to='/Contact'>Contact</Link></li>
                    <li className='hover:text-orange-500'><Link to='/Grocery'>Grocery</Link></li>
                    <li className='hover:text-orange-500'><Link to={"/cart"}>Cart({ cartItems.length })</Link></li>
                </ul>
            </div>
            <div className='nav-buttons hidden md:block'>
                <button className='login-btn btn py-1.5 px-5 border rounded-lg cursor-pointer hover:bg-black hover:text-white font-semibold'
                onClick={()=>{
                    login === 'login'? setLogin('logout'): setLogin('login')
                }}
                >{login}</button>
            </div>
        </header>
    )
}

export default Header;
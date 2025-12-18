import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink, Link } from 'react-router-dom'
import { FaSearch, FaUserCircle, FaCode } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import CartIcon from './CartIcon';


const Navbar = ({ cartList }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <section className='header-wrapper'>
                <div className='logo-container'>
                    <Link to="/">
                        <h2 className='logo'><FaCode size={50} /></h2>
                    </Link>
                    <button className='nav-menu-btn' onClick={() => setIsMenuOpen((p) => !p)}>
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
                <nav className={`nav-container ${isMenuOpen ? 'nav-open' : ''}`} >
                    <NavLink className="nav-item" to="/" >Home</NavLink>
                    <NavLink className="nav-item" to="/shop" >Shop</NavLink>
                    <NavLink className="nav-item" to="/my-learning">My Learning</NavLink>
                </nav>
                <div className='search-container'>
                    <input
                        className='search-input'
                        type="text"
                        placeholder="Search..."
                    />
                </div>
                <div className='profile-container'>
                    <CartIcon cartList={cartList} />

                    <Link to="/">
                        <FaUserCircle size={30} title="Profile" />
                    </Link>

                    <button className="nav-btn">
                        <FaSearch size={30} title="Search" />
                    </button>

                </div>
            </section>
        </header>
    )
}

export default Navbar
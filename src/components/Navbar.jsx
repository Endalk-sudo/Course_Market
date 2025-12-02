import React from 'react'
import  "./Navbar.css"
import { NavLink ,Link } from 'react-router-dom'
import { FaShoppingCart ,FaSearch, FaUserCircle} from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="header">
        <Link to="/">
             <h2 className='logo'>🧑‍💻 Code Academy</h2>
        </Link>
        <nav>
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
            <Link className="cart-icon" to="/cart">
                <FaShoppingCart size={30} title="Cart" />
            </Link>

            <Link to="">
                <FaUserCircle size={30} title="Profile" />
            </Link> 

            <button className="nav-btn">
                <FaSearch size={30} title="Search" />
            </button>

        </div>
        
    </header>
  )
}

export default Navbar
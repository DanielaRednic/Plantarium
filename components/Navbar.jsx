import React from 'react'
import "../resources/nav.css"
import logo from '../img/logo-colour.png'
import cart from '../img/cart.png'
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { logout } from '../redux/userRedux'
import { useDispatch } from "react-redux";


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)

    let user=useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
          logout()
        );
    };

    return (
        <nav class="navbar">
        <div class="nav">
            <img src={logo} class="brand-logo" alt=""/>
            <div class="nav-items">
            {user ? <a>Welcome back, {user ? <a>{user.username}</a>:<a>{user.username}</a>}!</a> : null}
                {/* <div class="search">
                    <input type="text" class="search-box" placeholder="Insert Plant Name"/>
                    <button class="search-button">Search</button>
                </div> */}
                {user && <a onClick={handleClick}>Log Out</a>}
                {user ? null : <a href="/login" target="_self">Log In</a>}
                {user ? null : <a href="/register" target="_self">Sign Up</a> }
                <Badge badgeContent={quantity} color="primary">
                <a href="/cart" target="_self"><img src={cart} alt=""/></a>
                </Badge>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="/" target="_self" class="link">home</a></li>
            <li class="link-item"><a href="/indoor-plants/" target="_self" class="link">indoor-plants</a></li>
            <li class="link-item"><a href="/outdoor-plants/" target="_self" class="link">outdoor-plants</a></li>
            <li class="link-item"><a href="/cuttings/" target="_self" class="link">cuttings</a></li>
            <li class="link-item"><a href="/accessories/" target="_self" class="link">accessories</a></li>
        </ul>
        </nav>
    )
}

export default Navbar

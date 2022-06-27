import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import NavBar from "./Navbar";

const Index = () =>{
    return(
        <header className="header">
            <Logo />
            <NavBar/>
            <CartWidget />
        </header>
    )
}
export default Index;
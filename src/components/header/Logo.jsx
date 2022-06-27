import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css";
import logo from './assets/logo.png'
const Logo = () =>{
    return(
        <figure className="logo">
            <a href="#">
                <img src={logo} alt="" />
            </a>
        </figure>
    )
}
export default Logo;
import React from 'react'
import ReactDOM from 'react-dom'
import cardWidget  from './assets/cardwidget.svg'

import "./style.css";
const CartWidget = () =>{
    return(
        <div className="login">
                <a href="">
                <img src={ cardWidget} alt="" />
                </a>

                <p>Iniciar sesión</p>    
            </div> 
    )
}
export default CartWidget;
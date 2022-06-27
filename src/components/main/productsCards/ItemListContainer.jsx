import React from 'react';

import './ItemListContainer.css';


const ItemListContainer=({precio, nombre, img}) =>{
    return(
            <div className="card">                
                <img src={img} alt="" />
                <h3>{nombre}</h3>
                <p>precio: {precio}</p>
                <div>
                    <p>contador</p>
                </div>
                    <p className="botton-card"><a href=" #">Comprar</a></p>
            </div>

    )
}
export default ItemListContainer;
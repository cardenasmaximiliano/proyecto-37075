import React from 'react'
import './main.css';
import ItemListContainer from './productsCards/ItemListContainer';

import auri1 from './assets/auri1.png';
import auri2 from './assets/auri2.png';
import auri3 from './assets/auri3.jpg';

const SectionIndex = () =>{
    return(
        <section className="section">

            <h2>Ofertas</h2>
            <section className="galeriaIndex">
            <ItemListContainer img={auri1} precio='$2500' nombre='Sony'/>
            <ItemListContainer img={auri2} precio='$1500' nombre='Philips'/>
            <ItemListContainer img={auri3} precio='$3500' nombre='Panasonic'/>

            </section>
        </section>

    )
}
export default SectionIndex;
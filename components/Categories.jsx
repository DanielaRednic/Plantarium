import React from 'react'
import "../resources/home.css"

import indoor from '../img/indoor-plants.jpg'
import outdoor from '../img/outdoor-plants.jpg'
import accessories from '../img/accessories.jpg'
import cuttings from '../img/cuttings.jpg'

const Categories = ({item}) => {
    return (
        <section class="collection-section">
        <a href="/indoor-plants" target="_self" class="collection">
            <img src={indoor} alt=""/>
            <p class="collection-title">Indoor Plants</p>
        </a>
        <a href="/outdoor-plants" target="_self" class="collection">
            <img src={outdoor} alt=""/>
            <p class="collection-title">Outdoor Plants</p>
        </a>
        <a href="/accessories" target="_self" class="collection">
            <img src={accessories} alt=""/>
            <p class="collection-title">Accessories</p>
        </a>
        <a href="/cuttings" target="_self" class="collection">
            <img src={cuttings} alt=""/>
            <p class="collection-title">Cuttings</p>
        </a>
    </section>
    )
}

export default Categories

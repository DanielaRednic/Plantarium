import React from 'react'
import "../resources/home.css"

import arrow from '../img/arrow-right.png'
import monstera from '../img/monstera.png'
import spider_plant from '../img/spider-plant.png'
import string_of_turtles from '../img/string-of-turtles.png'
import ivy from '../img/ivy.png'
import plant from '../img/Asset 4.png'
import cactus from '../img/cactus.png'

const productContaiers = [...document.querySelectorAll('.product-container')];
const rightBtn = [...document.querySelectorAll('.right-btn')];
const leftBtn = [...document.querySelectorAll('.left-btn')];

productContaiers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    leftBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


const Carousel = () => {
    return (
        <div>
        <section class="product">
        <h2 class="product-category">best selling</h2>
        <button class="left-btn"><img src={arrow} alt=""/></button>
        <button class="right-btn"><img src={arrow} alt=""/></button>
        <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src={monstera} class="product-thumbnail" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-name">monstera</h2>
                    <p class="product-short-descprition">Monstera Pinnatipartita..Indoor plant from South America</p>
                    <span class="discounted-price">$40</span>
                    <span class="price">$80</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">35% off</span>
                    <img src={spider_plant} class="product-thumbnail" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-name">Spider plant</h2>
                    <p class="product-short-descprition">Indoor plant from South America</p>
                    <span class="discounted-price">$50</span>
                    <span class="price">$70</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src={string_of_turtles} class="product-thumbnail" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-name">String og Turtles</h2>
                    <p class="product-short-descprition">Indoor plant from South America</p>
                    <span class="discounted-price">$30</span>
                    <span class="price">$60</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src={ivy} class="product-thumbnail" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-name">Ivy</h2>
                    <p class="product-short-descprition">Indoor plant from South America</p>
                    <span class="discounted-price">$25</span>
                    <span class="price">$50</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src={plant} class="product-thumbnail" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-name">Sansevieria</h2>
                    <p class="product-short-descprition">Sansevieria comet amazon green...</p>
                    <span class="discounted-price">$15</span>
                    <span class="price">$30</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src={cactus} class="product-thumbnail" alt=""/>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-name">cactus</h2>
                    <p class="product-short-descprition">Cactus Ferocactus</p>
                    <span class="discounted-price">$10</span>
                    <span class="price">$20</span>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}

export default Carousel

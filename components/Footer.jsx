import React from 'react'
import "../resources/footer.css"

import logo from '../img/logo-white.png'

const Footer = () => {
    return (
        <footer>
        <div class="footer-content">
            <img src={logo} class="logo" alt=""/>
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">indoor plants</li>
                    <li><a href="#" class="footer-link">small</a></li>
                    <li><a href="#" class="footer-link">medium</a></li>
                    <li><a href="#" class="footer-link">large</a></li>
                    <li><a href="#" class="footer-link">dripping</a></li>
                    <li><a href="#" class="footer-link">cacti</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">outdoor plants</li>
                    <li><a href="#" class="footer-link">trees</a></li>
                    <li><a href="#" class="footer-link">roses</a></li>
                    <li><a href="#" class="footer-link">seeds</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">cuttings</li>
                    <li><a href="#" class="footer-link">rare plants</a></li>
                    <li><a href="#" class="footer-link">common plants</a></li>
                    <li><a href="#" class="footer-link">bouquets</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">accessories</li>
                    <li><a href="#" class="footer-link">pots</a></li>
                    <li><a href="#" class="footer-link">vases</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about project</p>
        <p class="info">© Rednic Daniela-Livia, 3rd Year student @UPT, 2021 </p>
        <p class="info">Support e-mail: support@plantarium.com </p>
        <p class="info">Contact number: 180 00 00 081 </p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Terms & Services</a>
                <a href="#" class="social-link">Privacy Page</a>
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
        <p class="footer-credit">Plantarium. Because plants need adoption centers too!</p>
        </footer>
    )
}

export default Footer

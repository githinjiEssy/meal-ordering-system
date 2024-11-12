import React from 'react';
import { FaSquareXTwitter, FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer__container'>
      <footer className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__left">
            <h1 className="web__name">SpeedyServ</h1>
            <p className="web__slogan">Serving Speed and Flavor, One Order at a Time.</p>

            <div className="footer__socials">
              <FaSquareXTwitter />
              <FaSquareInstagram />
              <FaSquareFacebook />
            </div>
          </div>

          <div className="footer__links">
            <ul className="link__list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>

          <div className="footer__form">
            <h2 className="form__title">Send a message</h2>

            <div className="footer__input">
              <input placeholder="Enter message" type="text" name="text" class="input"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
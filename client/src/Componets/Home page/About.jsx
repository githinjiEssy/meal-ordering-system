import React from 'react';
import "./About.css";
import { FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { SiCodefresh } from "react-icons/si";


function About() {

  return (
    <div className="about__section">

      <div className="about_title">About Us</div>

      <div className="header_wrapper">
        <div className="about__left">
          <img src="/images/about.png" alt="" className="about__img" />
          <div className="about_empty"></div>
        </div>

        <div className="about__right">
          <div className="about__subtitle">Why Us?</div>

          <div className="about__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam labore neque esse autem error similique dolore quidem praesentium sequi, quibusdam officiis tenetur repudiandae nisi rem odio, a, aspernatur laudantium. Rem at consequuntur ullam blanditiis nemo sit? Sit officia ad dolorem.
          </div>

          <div className="about__icons">
            <div className="ratings">
              <FaStar />
              <FaStar />
              <FaStar />

              <p className="rating_next">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eaque!
              </p>
            </div>

            <div className="fast_delivery">
              <MdDeliveryDining />

              <p className="fast_delivert-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, dicta.
              </p>
            </div>

            <div className="fresh_food">
              <SiCodefresh />

              <p className="fresh_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
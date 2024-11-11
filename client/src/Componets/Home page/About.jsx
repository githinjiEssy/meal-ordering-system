import React from 'react';
import "./About.css";
import { TbStarsFilled } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import { SiCodefresh } from "react-icons/si";


function About() {

  return (
    <div className="about__section">
      <div className="about__wrapper">
        <h1 className="about__title">About Us</h1>

        <div className="about__content">
          <div className="about__left">
            <div className="about__empty"></div>
            <img src="/images/about.png" alt="" className="about__img" />
          </div>

          <div className="about__right">
          <div className="about__subtitle">Why Us?</div>

          <div className="about__text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam labore neque esse autem error similique dolore quidem praesentium sequi, quibusdam officiis tenetur repudiandae nisi rem odio, a, aspernatur laudantium. Rem at consequuntur ullam blanditiis nemo sit? Sit officia ad dolorem.</p>

            <div className="about__icons">
              <div className="ratings">
              <TbStarsFilled className='about_icon'/>

                <p className="rating_next">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eaque!
                </p>
              </div>

              <div className="fast_delivery">
                <MdDeliveryDining className='about_icon'/>

                <p className="fast_delivert-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, dicta.
                </p>
              </div>

              <div className="fresh_food">
                <SiCodefresh className='about_icon'/>

                <p className="fresh_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic?
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
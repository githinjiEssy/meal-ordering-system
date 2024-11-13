import React from 'react'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'

function Menu() {
    const cards = [
        {
            image: "",
            rate: 4.5,
            star: "⭐⭐⭐⭐",
            name: "Ugali",
            description: "A staple food made from maize flour, ugali is a dense, porridge-like dish that pairs well with stews and vegetables, providing a filling base for any meal.",
            price: 180
        },
        {
            image: "",
            rate: 4.5,
            star: "⭐⭐⭐⭐",
            name: "Nyama Choma",
            description: "Meaning roasted meat, this Kenyan barbecue is typically made with goat or beef, seasoned simply and grilled over an open flame, resulting in smoky, tender bites.",
            price: 180
        },
        {
            image: "",
            rate: 4.5,
            star: "⭐⭐⭐⭐",
            name: "Githeri",
            description: "A nutritious dish made of boiled maize and beans, often mixed with vegetables and sometimes spiced up with potatoes or meat.",
            price: 180
        },
        {
            image: "",
            rate: 4.5,
            star: "⭐⭐⭐⭐",
            name: "Githeri",
            description: "A nutritious dish made of boiled maize and beans, often mixed with vegetables and sometimes spiced up with potatoes or meat.",
            price: 180
        },
        {
            image: "",
            rate: 4.5,
            star: "⭐⭐⭐⭐",
            name: "Githeri",
            description: "A nutritious dish made of boiled maize and beans, often mixed with vegetables and sometimes spiced up with potatoes or meat.",
            price: 180
        },
        {
            image: "",
            rate: 4.5,
            star: "⭐⭐⭐⭐",
            name: "Nyama Choma",
            description: "Meaning roasted meat, this Kenyan barbecue is typically made with goat or beef, seasoned simply and grilled over an open flame, resulting in smoky, tender bites.",
            price: 180
        },
        {
            image: "",
            rate: 4.5,
            star: "⭐⭐⭐⭐",
            name: "Githeri",
            description: "A nutritious dish made of boiled maize and beans, often mixed with vegetables and sometimes spiced up with potatoes or meat.",
            price: 180
        },
        {
            image: "",
            rate: 4.5,
            star: "⭐⭐⭐⭐",
            name: "Ugali",
            description: "A staple food made from maize flour, ugali is a dense, porridge-like dish that pairs well with stews and vegetables, providing a filling base for any meal.",
            price: 180
        }
    ]

  return (
    <div className="menu__container">
        <div className="menu__card-wrapper">

            <Navbar/>

            <div className="food__categories">
                <ul className='category__list'>
                    <li className='category'>
                        <a href="#" className="category" type="button">Snack</a>
                    </li>
                    <li className='category'>
                        <a href="#" className="category" type="button">Breakfast</a>
                    </li>
                    <li className='category'>
                        <a href="#" className="category" type="button">Lunch</a>
                    </li>
                    <li className='category'>
                        <a href="#" className="category" type="button">Dinner</a>
                    </li>
                    <li className='category'>
                        <a href="#" className="category" type="button">Drinks</a>
                    </li>
                </ul>
            </div>

            <div className="meal__container">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.image} alt="" className="card__img" />

                        <div className="card__content">
                            <div className="card__ratings">
                                <h3 className="card__rate">{card.rate}</h3>
                                <p className="card_star-rate">{card.star}</p>
                            </div>

                            <div className="card__text">
                                <h1 className="card__title">{card.name}</h1>
                                <p className="card__description">{card.description}</p>
                            </div>

                            <div className="card__bottom">
                                <h2 className="card__price">Ksh.{card.price}</h2>

                                <button className="card__btn">Add</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer/>
        </div>
    </div>
  )
}

export default Menu
import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import i9 from '../images/img-9.jpg'
import i8 from '../images/img-8.jpg'
import i4 from '../images/img-4.jpg'
import i3 from '../images/img-3.jpg'
import i2 from '../images/img-2.jpg'


const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={i9}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path='/services'/>
                        <CardItem
                        src={i2}
                        text="Travel through the islands of bali in a Private Cruise"
                        label="Luxury"
                        path='/services'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src={i3}
                        text="Set sail in the Atlantic Ocean"
                        label="Mystery"
                        path='/services'/>
                        <CardItem
                        src={i4}
                        text="Enjoy your vacation on the Mountains"
                        label="Adventure"
                        path='/products'/>
                        <CardItem
                        src={i8}
                        text="Ride through the Sahara Desert on a guided camel tour"
                        label="Adrenaline"
                        path='/sign-up'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

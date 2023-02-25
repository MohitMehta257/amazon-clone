import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt=""/>
      
      {/* Product id, title, price, rating, image */}
      {/* Product */}

      <div className='home__row'>
      <Product

      id="12321341"
      title="I think this is Durjoy Datta's best work yet! But that ending though?!? It left me all confused because the story felt incomplete."
      price={120}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566325115l/52226370.jpg"
      />

        <Product

        id="12321342"
        title="OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Magico Black)"
        price={1999}
        rating={4}
        image="https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UY327_FMwebp_QL65_.jpg"
        />

      </div>

      <div className='home__row'>
      <Product

      id="12321343"
      title="HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge"
      price={37990}
      rating={3}
      image="https://m.media-amazon.com/images/I/81zoyHn5uJL._SX522_.jpg"
      />

        <Product

        id="12321344"
        title="Apple iPhone 12 (64GB) - Purple."
        price={50900}
        rating={5}
        image="https://m.media-amazon.com/images/I/31jQ91XUDhS._SX342_SY445_.jpg"
        />

        <Product

        id="12321345"
        title="Fire-Boltt Ninja 2 SpO2 Full Touch Smartwatch with 30 Workout Modes"
        price={1599}
        rating={4}
        image="https://m.media-amazon.com/images/I/617eiZeFtNL._SX522_.jpg"
        />

      </div>

      <div className='home__row'>
      <Product

      id="12321346"
      title="Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)"
      price={12999}
      rating={4}
      image="https://m.media-amazon.com/images/I/71L-lTQnJiL._SX522_.jpg"
      />
      </div>
    </div>
  )
}

export default Home
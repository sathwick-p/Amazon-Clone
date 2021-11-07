import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/I/71US0RBwD9L._SX3000_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            title="New Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Black Sport Band"
            price={27900}
            id="11"
            image="https://m.media-amazon.com/images/I/71bUKrOPzYL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            title="
          Dell XPS 15 (2021) i7-11800H Touch Screen Laptop"
            id="12"
            price={220000}
            image="https://m.media-amazon.com/images/I/61aj6AxT4-L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Sony a7 III Full-Frame Mirrorless Interchangeable-Lens Camera (with 28-70mm F3.5-5.6 OSS Lens)"
            price={171000}
            id="13"
            image="https://m.media-amazon.com/images/I/91rQ3XfEYzL._AC_UL480_QL65_.jpg"
          />
          <Product
            title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Blue)"
            id="14"
            price={7900}
            image="https://m.media-amazon.com/images/I/61NIsUGl+FL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            title="Fossil Nate Chronograph Analog Black Dial Men's Watch"
            id="15"
            price={11000}
            image="https://m.media-amazon.com/images/I/61xqpipYCnL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="adidas Nemeziz Plus Firm Ground Cleats Mens Soccer Shoes"
            price={8999}
            id="16"
            image="https://m.media-amazon.com/images/I/71jA6EsIxZL._AC_UL480_QL65_.jpg"
          />
          <Product
            title="Apple iPhone 13 Mini (256GB) - Pink"
            price={80000}
            id="17"
            image="https://m.media-amazon.com/images/I/61nPiOOv9BL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            title="Samsung Galaxy Note 20 Ultra 5G with Snapdragon 865"
            id="18"
            price={95000}
            image="https://m.media-amazon.com/images/I/51+oXndtdcL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

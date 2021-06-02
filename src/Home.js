import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className ="home">
            <img className = "home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg"></img>
        
        
        {/*products*/}
        <Product 
        id = "351243"
        title = "Infinity (JBL) Glide 120 Metal in-Ear Wireless Flex Neckband with Bluetooth 5.0 and IPX5 Sweatproof (Black and Yellow)"
        price = {1099}
        rating = {5}
        image = "https://images-eu.ssl-images-amazon.com/images/I/31N9z2rXiBL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        </div>
    )
}

export default Home

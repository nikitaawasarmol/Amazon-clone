import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className ="home">
            <img className = "home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg"></img>
        
        
        {/*products*/}
        {/* 1st row */}
        <div className = "home__row">

        <Product 
        id = "351243"
        title = "Infinity (JBL) Glide 120 Metal in-Ear Wireless Flex Neckband with Bluetooth 5.0 and IPX5 Sweatproof (Black and Yellow)"
        price = {"1,099"}
        rating = {5}
        image = "https://images-eu.ssl-images-amazon.com/images/I/31N9z2rXiBL._SX300_SY300_QL70_FMwebp_.jpg"
        />

        <Product   
        id = "351243"
        title = "ASUS TUF Gaming BP2700T 17-inch Gaming Laptop Backpack (Black), 1680D Water-Repellent Exterior, 18L Capacity & Tactical Camo Design, for Gaming and Everyday Use"
        price = {"3,498.00"}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/81BvxQbA0TL._SL1500_.jpg"
        />

        </div>

        
        
         {/* 2nd row */}
         <div className = "home__row">

        <Product 
        id = "351243"
        title = " Fujifilm Instax Mini 9 Instant Camera (Smokey White) "
        price = {"3,919.00"}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/71EhsUOyLZL._SX425_.jpg"
        />

        <Product   
        id = "351243"
        title = "HP 22fw Ultra-Thin Full HD 21.5-inch IPS Monitor with VGA and HDMI Ports, AMD FreeSync(3KS61AA) "
        price = {"9,999.00"}
        rating = {5}
        image = "https://images-na.ssl-images-amazon.com/images/I/71yYGgCG%2BhL._SL1500_.jpg"
        />

        <Product   
        id = "87468"
        title = "Fossil Gen 5 Carlyle Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS and Smartphone Notifications "
        price = {"22,995.00"}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/71XWG48C-NL._UL1500_.jpg"
        />

        </div>


       
        {/* 3rd row */}

        <div className = "home__row">

        <Product 
        id = "351243"
        title = "TeeBustrr Non-Woven Fabric Disposable Mask (Blue, Without Valve, Pack of 100) for Kids & Adults"
        price = {"464.00"}
        rating = {5}
        image = "https://images-na.ssl-images-amazon.com/images/I/41ZLEmiv%2BkL.jpg"
        />
     
       
       
        </div>
        </div>
    )
}

export default Home

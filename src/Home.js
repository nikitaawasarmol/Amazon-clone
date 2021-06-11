import React from 'react';
import "./Home.css";
import Product from './Product';
import Row from './Row';

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
        price = {1099}
        rating = {5}
        image = "https://images-eu.ssl-images-amazon.com/images/I/31N9z2rXiBL._SX300_SY300_QL70_FMwebp_.jpg"
        />

        <Product   
        id = "64873"
        title = "ASUS TUF Gaming BP2700T 17-inch Gaming Laptop Backpack (Black), 1680D Water-Repellent Exterior, 18L Capacity & Tactical Camo Design, for Gaming and Everyday Use"
        price = {3498}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/81BvxQbA0TL._SL1500_.jpg"
        />

        <Product   
        id = "347329"
        title = "Yuwell 8F-5A Portable Oxygen Concentrator Machine (93% concentration at 5L) "
        price = {40811}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/610nk4fp9MS._SL1500_.jpg"
        />
{/* 
        <Product  className = "secure" 
        title = "Sign in for your best experience"
        /> */}

        </div>
{/* sliding images */}
        <div className= "row__images">
            
        <Row
        isLargeImage
        image = "https://m.media-amazon.com/images/I/51jLRfblNvL._AC_SY200_.jpg"
        
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/51kmBJH8DUL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/41zA4WYVMbL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/516dW8K8z9S._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/51WNeLcLErL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/41rYoyUG3NL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/41XZ2tARbJL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/41XZ2tARbJL._AC_SY200_.jpg"
        />
         <Row 
         isLargeImage
        image = "https://m.media-amazon.com/images/I/413zv7AQjlL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/41uXcq099NL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/41e+So90OrL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/51YI+nhjTJS._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/41jLs9gtQDL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/41Ww30n4jlL._AC_SY200_.jpg"
        />
         <Row
         isLargeImage
        image = "https://m.media-amazon.com/images/I/51lI9vOLFgL._AC_SY200_.jpg"
        />
           <Row
           isLargeImage
        image = "https://m.media-amazon.com/images/I/51EaXU5jTjL._AC_SY200_.jpg"
        />
        
        <Row
        isLargeImage
        image = "https://m.media-amazon.com/images/I/315DLTrZy1S._AC_SY200_.jpg"
        />
        
        <Row
        isLargeImage
        image = "https://m.media-amazon.com/images/I/41Is7HVqqdL._AC_SY200_.jpg"
        />
        
        <Row
        isLargeImage
        image = "https://m.media-amazon.com/images/I/31wTI3zJy7L._AC_SY200_.jpg"
        />
        
        

     

        </div>
      
        
        
         {/* 2nd row */}
         <div className = "home__row">

        <Product 
        id = "382683"
        title = " Fujifilm Instax Mini 9 Instant Camera (Smokey White) "
        price = {3919}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/71EhsUOyLZL._SX425_.jpg"
        />

        <Product   
        id = "12711"
        title = "HP 22fw Ultra-Thin Full HD 21.5-inch IPS Monitor with VGA and HDMI Ports, AMD FreeSync(3KS61AA) "
        price = {9999}
        rating = {5}
        image = "https://images-na.ssl-images-amazon.com/images/I/71yYGgCG%2BhL._SL1500_.jpg"
        />

        <Product   
        id = "87468"
        title = "Fossil Gen 5 Carlyle Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS and Smartphone Notifications "
        price = {22995}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/71XWG48C-NL._UL1500_.jpg"
        />

        </div>


       
        {/* 3rd row */}

        <div className = "home__row">

        <Product 
        id = "123121"
        title = "TeeBustrr Non-Woven Fabric Disposable Mask (Blue, Without Valve, Pack of 100) for Kids & Adults"
        price = {46400}
        rating = {5}
        image = "https://images-na.ssl-images-amazon.com/images/I/41ZLEmiv%2BkL.jpg"
        />
     
       
       
        </div>
        </div>
    )
}

export default Home

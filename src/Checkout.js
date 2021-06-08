import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className = "checkout">
            <div className = "checkout__left">
           <img className = "checkout__ad" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"></img> 
        
        {basket?.length === 0 ? (
            <div>
                <h2>Your Amazon Cart is empty </h2>
                <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
Continue shopping on the Amazon.in homepage, learn about today's deals, or visit your Wish List. </p>
            </div>
        ) : (
            <div>
                <h2 className = "checkout__title">Your Amazon Cart</h2>

                {/* products */}
                {basket.map(item => (
                 <CheckoutProduct 
                 id = {item.id}
                 title = {item.title}
                 image = {item.image}
                 price = {item.price}
                 rating = {item.price}
                 />
                ))}
               
            </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className = "Checkout__right">
                <h1>Subtotal</h1>
                <Subtotal />
                 </div>
        )}
        </div>
    )
}

export default Checkout;

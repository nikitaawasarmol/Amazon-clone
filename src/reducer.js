export const initialState = {
    basket: [{
        id: "351243",
        title: "Infinity (JBL) Glide 120 Metal in-Ear Wireless Flex Neckband with Bluetooth 5.0 and IPX5 Sweatproof (Black and Yellow)",
        price: 1099,
        rating : 5,
        image: "https://images-eu.ssl-images-amazon.com/images/I/31N9z2rXiBL._SX300_SY300_QL70_FMwebp_.jpg"
      
    }],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
           
        // cloning the basket here
        let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0 ) {
                // item is more than 0 then remove it
                newBasket.splice(index, 1);
                
            } else {
                console.warn (`Cant remove product (id: ${action.id}) as its not in the basket`)
            }


            return { ...state, basket: newBasket } ; 
       
        default:
            return state;
    }
}

export default reducer;
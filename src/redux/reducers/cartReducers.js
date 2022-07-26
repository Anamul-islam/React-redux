import { ADD_TO_CART, REMOVE_CART } from "../actions/cartActions";

const initialState = {
    cart:[],
    product:[
        {name:"Lenovo", id:1},
        {name:"Asus", id:2},
        {name:"Dell", id:3},
        {name:"Hp", id:4},
        {name:"Toseba", id:5}
    ],
};


const cartReducers = (state = initialState,action) =>{

    switch(action.type){
        
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.cart,newId];
            return{ ...state, cart: newCart}

        case REMOVE_CART:
            const id = action.id;
            const remaingCart  =  state.cart.filter(item => item  !== id);
            return{...state,cart:remaingCart}

            


        default:
            return state;
    }

};

export default cartReducers;
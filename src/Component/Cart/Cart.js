import React from 'react';
import { removeCart } from '../../redux/actions/cartActions';
import {connect} from "react-redux";
const Cart = (props) => {
    const {cart, removeCart} = props;
    return (
        <div>
            This is Cart
            {
                cart.map(id => <li>{id} <button onClick={() =>removeCart(id) }>x</button></li> )
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart:state.cart,
         
    }
}

const mapDispatchToProps = {

    removeCart : removeCart,
}



export default connect(mapStateToProps,mapDispatchToProps ) (Cart);
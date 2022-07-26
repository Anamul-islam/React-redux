import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions';
import {connect} from "react-redux";
 
const Shop = (props) => {
    console.log(props);
    const {product,addToCart} = props;
  
    return (
        <div>
             {
               product.map(pd => <Product pd = {pd}  key = {pd.id} addToCart={addToCart}/>)
             }
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart:state.cart,
        product:state.product
    }
}


const mapDispatchToProps = {

    addToCart : addToCart,
}


  

export default connect(mapStateToProps,mapDispatchToProps ) (Shop);
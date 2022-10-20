import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../ReviewItems/Reviewitem';

const Order = () => {
    const {products,previouscart} = useLoaderData();
    const [cart , setCart] = useState(previouscart);
    const handleremoveitems = (id) =>{
        const remaning = cart.filter(producty => producty.id !== id);
        setCart(remaning);
        removeFromDb(id)
    }
 
    const clearcart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
              {
                cart.map(product => <Reviewitem
                    key={product.id}
                    product={product}
                    handleremoveitems={handleremoveitems}
                ></Reviewitem>)
              }
                 {
                       
                        cart.length === 0 && <h2>No items for reviews <Link to= '/'>please shope more</Link></h2>
                    
                    
                 }
    
            </div>
            <div className='cart-container'>
                <Cart clearcart={clearcart} cart={cart}> </Cart>

            </div>
        </div>
    );
};

export default Order;
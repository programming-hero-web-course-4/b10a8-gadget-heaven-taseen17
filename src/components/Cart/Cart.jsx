import React, { useContext, useState } from 'react';
import { GoSortDesc } from "react-icons/go";
import { GadgetContext } from '../Root/Root';

const Cart = () => {
    const [cart, setCart] = useContext(GadgetContext)
    const [totalPrice, setTotalPrice] = useState(0)
    console.log(cart)
    return (
        <div className='flex justify-between max-w-[1050px] mx-auto mt-10'>
            <h3 className='font-bold text-2xl'>Cart</h3>

            <div className='flex gap-7'>
                <p className='mr-24 font-bold text-2xl'>Total cost: {totalPrice} </p>
                <button className='btn rounded-2xl bg-transparent text-[#9538E2] font-semibold text-base'>Sort by Price <GoSortDesc /></button>
                <button className='btn rounded-2xl bg-[#9538E2] text-white font-medium text-base'>Purchase</button>
            </div> 
            <div>
                {
                    cart.map()
                }
            </div>
        </div>
    );
};

export default Cart;
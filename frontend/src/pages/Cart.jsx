import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncDeleteCart, asyncLoadCart } from '../store/actions/cartActions';


const Cart = () => {
  const cart = useSelector((state)=>state.cart.carts);
  const dispatch = useDispatch();
  
  console.log(cart);
  const deleteCarthandler =(id)=>{
    dispatch(asyncDeleteCart(id));
  }
  
  useEffect(()=>{
    dispatch(asyncLoadCart());
  },[dispatch])
  const renderCart = cart.map((cart)=>{
   return (
      <div
        className="w-full max-w-sm border border-gray-600 rounded-lg p-4 flex flex-col gap-3 md:shadow-2xl"
        key={cart.id}
      >
        <div className="w-full h-48 flex items-center justify-center bg-white rounded overflow-hidden group">
          <img
            src={cart.image}
            alt={cart.title}
            className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>

        <h1 className="font-medium text-lg">{cart.title}</h1>
        <h2 className="text-sm text-gray-700">{cart.category}</h2>

        <p className="text-sm text-gray-600">
          {cart.description}
        </p>
        

        <div className="flex items-center justify-between mt-auto">
          <p className="font-semibold">${cart.price}</p>
          <button onClick={()=>deleteCarthandler(cart.id)} className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition">
            Delete Cart
          </button>
        </div>
      </div>
    )});
  return (
    <div>
      {renderCart}
    </div>
  )
}

export default Cart;

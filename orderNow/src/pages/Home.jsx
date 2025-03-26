import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import Category from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { DataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';



const Home = () => {
  let {cate, setCate,input,setShowCart, showCart} = useContext(DataContext);
 
  

  function filters(category) {
    
    if (category === "ALL") {
      setCate(food_items);
    } else {
      let new_list = food_items.filter((item) => {
        return item.food_category === category;
      });
      setCate(new_list);
    }
  }

  const items = useSelector((state) => state.cart);
  const subtotal = items.reduce((total,item) => total+item.qty*item.price,0);
  let deliveryFee = 20;
  let taxes = subtotal * 0.5/100;
  let total = Math.floor(subtotal + taxes + deliveryFee);

  

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
    <NavBar/>
    {!input ?  <div className="flex flex-wrap justify-center items-center gap-5 md:flex-nowrap">
      
      <div className="hidden md:flex gap-5 flex-wrap justify-center items-center">
        {Category.map((item,index) => (
           
          <div key={index} className="bg-white md:w-36 md:h-38 w-30 h-30 transition transition-all hover:translate-y-2 p-5 cursor-pointer items-start flex flex-col gap-5 justify-start text-gray-700 text-[18px] font-bold rounded-lg shadow-lg" onClick={()=> filters(item.name)}>
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>

     
      <div className="flex md:hidden overflow-x-auto whitespace-nowrap snap-x snap-mandatory gap-5 p-3">
        {Category.map((item,index) => (
           
          <div key={index} className="bg-white min-w-[120px] h-30 flex flex-col gap-5 justify-start p-5 cursor-pointer text-gray-700 text-[18px] font-bold rounded-lg shadow-lg snap-center" onClick={() => filters(item.name)}>
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    </div> : null }
       

      <div className='flex flex-wrap gap-8 justify-center items-center md:px-5 md:pt-5'>
        {cate.length>0?cate.map((item,index) =>(
          <Card key={index} name={item.food_name} price={item.price} type={item.food_type} image={item.food_image} id={item.id}  />
        )):
        <div className='text-3xl font-semibold! text-gray-600'>
         No food Item Found!
        </div>}
        
      </div>
    <div className ={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-8 transition-all duration-500 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`} >
          <header className=' w-full flex items-center justify-between '>
            <span className='text-xl text-blue-700 font-semibold'>Order Items</span>
            <span onClick={() => setShowCart(false)} className='text-2xl hover:bg-red-800 hover:text-white font-bold cursor-pointer '>< RxCross2/></span>
          </header>
          {items.length>0?  <><div className='mt-8 flex flex-col gap-4'>
          {items.map((item) =>{
            return  <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          })}
         </div>
         <div className='border-t-2 w-full  border-gray-500  mt-7 flex flex-col p-8 '>
            <div className='flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
              <span className='text-lg text-gray-800 font-semibold'>₹ {subtotal}</span>
            </div>
            <div className='flex justify-between items-center' >
              <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
              <span className='text-lg text-gray-800 font-semibold'>₹ {deliveryFee}</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
              <span className='text-lg text-gray-800 font-semibold'>₹ {taxes}</span>
            </div>
            
         </div>
          <div className='border-t-2 w-full  border-gray-500  mt-7 flex justify-between p-8 items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Total</span>
                <span className='text-lg text-gray-800 font-semibold'>₹ {total}</span>
            </div>
          <button className='w-full bg-green-600 md:text-xl text-white md:p-2 text-sm p-1
              hover:bg-green-800 transition-all rounded-lg font-semibold cursor-pointer' onClick={()=>
                toast.success("Order Placed")
              }>
                Place Order
          </button></>:
          <div className='text-center text-4xl mt-10 font-bold'>
            Empty Cart
          </div>}

        
      </div>
    </div>
  )
}

export default Home

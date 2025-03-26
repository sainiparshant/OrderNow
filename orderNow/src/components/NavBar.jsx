import React, { useContext, useEffect, useState } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { DataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const NavBar = () => {

  let {input, setInput, cate, setCate, setShowCart, showCart} = useContext(DataContext);
  
  useEffect(()=>{
    let new_list = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input) );
    setCate(new_list);
  },[input]);

  const items = useSelector((state) => state.cart);
  console.log(items);
  

  return (
    <div className='w-full h-[100px]  flex justify-between items-center md:px-8 px-5'>
      <div className='w-15 h-15 bg-white flex items-center justify-center rounded-lg shadow-xl'>
        <MdFastfood  className='w-8 h-8 text-red-700'/>
      </div>
        <form onSubmit={(e) => e.preventDefault()} className='flex bg-white w-[40%] h-[50px] items-center gap-2 md:gap-5 rounded-md px-4 md:w-[70%] md:h-[60px]'>
            <IoMdSearch className='w-6 h-6'/>
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Serach Items...' className='text-gray-600 text-md w-full h-full outline-none'  />
        </form>
      <div onClick={() => setShowCart(true)}
       className='w-15 h-15 bg-white flex items-center justify-center rounded-lg shadow-xl relative'>
        <span className='absolute top-0 right-2 text-green-700 font-semibold text-lg'>{items.length}</span>
        <FiShoppingBag className='w-8 h-8 text-green-700 cursor-pointer' />
      </div>
    </div>
  )

}

export default NavBar

import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import {GiChickenOven} from "react-icons/gi"
import image1 from '../assets/image1.avif'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({name,price,type,image,id}) {

  let dispatch = useDispatch()

  return (
    <div className='md:w-[320px] md:h-[400px] w-[250px] h-[250px]  p-4 bg-white  rounded-lg flex flex-col gap-2 md:gap-4 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
              <div>
                <img src={image}  className='rounded-lg w-full md:h-55 h-30' alt="" />
              </div>
              <div className='md:text-2xl  text-lg font-bold text-gray-800'>
               {name}
              </div>
              <div className='flex items-center justify-between md:text-xl text-sm'>
                <div className='text-blue-600 font-semibold hover:text-blue-800 transition'>Rs {price} </div>
                <div className='flex text-green-600 font-bold gap-2 items-center'>
                    {type === "veg" ? <LuLeafyGreen/> : <GiChickenOven/>}
                    <span>{type}</span></div>
              </div>
             <button className='w-full bg-red-600 md:text-xl text-white md:p-2 text-sm p-1
             hover:bg-red-500 transition-all rounded-lg font-semibold cursor-pointer'
              onClick={()=> {
                dispatch(addItem({ id: id, name:name, image:image, price:price, qty:1}));
              toast.success("item added")}}
              >Add to dish</button> 
    </div>
    
  )
}

export default Card

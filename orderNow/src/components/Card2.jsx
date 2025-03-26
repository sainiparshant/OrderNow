import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { IncreamentQty, removeItem ,DecreamentQty} from '../redux/cartSlice';

function Card2({image, name, price, id ,qty}) {
    let dispatch = useDispatch()
  return (
    <div className=' w-full h-[120px] p-2 flex shadow-lg flex justify-between  '>
        <div className='bg-white w-[80%] h-full p-2 flex  gap-5'>
            <div className='h-full  w-[40%] overflow-hidden rounded-lg'>
                <img className='object-cover shadow-lg h-full' src={image} alt="" />
            </div>
            <div className=' md:w-[40%] h-full flex flex-col gap-3'>
               <div className='text-md font-semibold text-gray-600'>{name}</div>
               <div className='w-[80px]  md:w-[110px] h-[50%] md:h-full  flex justify-between items-center overflow-hidden shadow-lg rounded-lg border-2 border-black'>
                <button className='w-[30%] h-full bg-white font-bold hover:bg-gray-200 cursor-pointer' onClick={()=> qty>1?dispatch(DecreamentQty(id)):1}>-</button>
                <span className=' w-[40%] h-full bg-slate-300 items-center flex justify-center'>{qty}</span>
                <button  className='w-[30%] h-full bg-white font-bold cursor-pointer hover:bg-gray-200'  onClick={()=> dispatch(IncreamentQty(id))}>+</button>
               </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-between  p-2'>
            <span className='text-xl font-semibold'>Rs {price}</span>
            <span className='text-red-700 text-2xl font-semibold cursor-pointer'> <RiDeleteBin6Line onClick={()=> dispatch(removeItem(id))}/></span>
        </div>
    </div>
  )
}

export default Card2

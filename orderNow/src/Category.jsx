import React from 'react'
import { IoApps } from "react-icons/io5";
import { RiCupLine } from "react-icons/ri";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { SiBurgerking } from "react-icons/si";

const Category = [
    {
        id:1,
        name:"ALL",
        icon:<IoApps className='w-[60px] h-[60px] text-orange-600'/>

    },
    {
        id:2,
        name:"breakfast",
        icon:<RiCupLine className='w-[60px] h-[60px] text-yellow-500'/>

    },
    {
        id:3,
        name:"soups",
        icon:<TbSoup className='w-[60px] h-[60px] text-green-500'/>

    },
    {
        id:4,
        name:"pasta",
        icon:<CiBowlNoodles className='w-[60px] h-[60px] text-purple-600'/>

    },
    {
        id:5,
        name:"main_course",
        icon:<MdOutlineFoodBank className='w-[60px] h-[60px] text-blue-500'/>

    },
    {
        id:6,
        name:"pizza",
        icon:<GiFullPizza className='w-[60px] h-[60px] text-red-500'/>

    },
    {
        id:7,
        name:"burger",
        icon:<SiBurgerking className='w-[60px] h-[60px] text-amber-500'/>

    }
]

export default Category

import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function Card(props) {
    let review=props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='relative md:absolute md:top-[-7rem] z-[10] mx-auto '>
            <img 
            className="aspect-square rounded-full w-[140px] h-[140px] z-[40] sticky object-cover "
            src={review.image} alt='img'/>
            <div className='w-[140px] h-[140px]  bg-violet-500 rounded-full absolute
            top-[-4px] z-[30] left-[6px] '></div>
        </div>
        <div>
            <p className='tracking-wider font-bold text-2xl uppercase'>{review.name}</p>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>
        <div className='flex justify-center text-violet-400  mt-5'>
            <FaQuoteLeft/>
        </div>
        <div>
            <p className='text-center mt-4 text-slate-500'>
                {review.text}
            </p>
        </div>
        <div className='flex justify-center text-violet-400  mt-5' >
            <FaQuoteRight/>
        </div>
    </div>
  )
}

export default Card
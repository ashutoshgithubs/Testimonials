import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial(props) {
    let reviews= props.reviews;
    const [index, setIndex]=useState(0);

    function leftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1)
        }
        else{
            setIndex(index-1);
        }
    }

    function rightHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }

    function randomHandler(){
        let randomIndex=Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }
    
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-2xl rounded-md' >

    {/* {
        reviews.map( (review)=>{
            return <Card review={review}></Card>
        })
    } */}
       
        {/* We don't have to create all cards together..So, no need to use map function----> One card will be created at a time & next card will be handled by arraow buttons */}

        <Card review={reviews[index]}/>

        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold'>
            <button onClick={leftHandler} className='hover:text-violet-500'>
                <FiChevronLeft/>
            </button>
            <button onClick={rightHandler} className='hover:text-violet-500'>
                <FiChevronRight/>
            </button>
        </div>
        <div className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-6'>
            <button onClick={randomHandler}>
                Surprise Click
            </button>
        </div>
    </div>
  )
}

export default Testimonial
import React, { useState } from 'react'
import 'swiper/swiper-bundle.css';
import { Autoplay, Mousewheel} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ExampleWords } from '../Mock';


const Card = () => {

  return (
    <div className='flex justify-center gap-5 mt-10'>
      <Swiper
        modules={[Autoplay, Mousewheel]}
        slidesPerView={4}
        spaceBetween={10}
        speed={6000}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        >
      {
        ExampleWords.map(({word, definition, example, synonyms, antonyms, source, emoji}, index) => {
          return <SwiperSlide key={index}>
            <div 
            className='grid justify-center w-[300px] h-[500px] overflow-y-auto p-5 bg-gray-100 rounded-[10px] hover:bg-orange-300 cursor-pointer'
            >
            <h3 className='text-center '>{word}</h3>
            <div className='w-[250px] h-[1px] bg-black my-2.5'></div>
            <p><span className='font-bold'>İzah: </span>{definition}</p>
            <p><span className='font-bold'>Nümunə cümlə: </span>{example}</p>
            <p><span className='font-bold'>Sinonimlər: </span>{synonyms}</p>
            <p><span className='font-bold'>Antonimlər: </span>{antonyms}</p>
            <p><span className='font-bold'>Mənbə: </span>{source}</p>
            <p className='text-4xl py-5 text-center'>{emoji}</p>
          </div> 
          </SwiperSlide>
        })
      }
      </Swiper>
    </div>
  )
}

export default Card
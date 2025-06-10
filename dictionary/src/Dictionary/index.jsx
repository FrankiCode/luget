import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import Card from '../Components/Card';


const Dictionary = () => {
  

  return (
    <div className='pb-10'>
      <div className='grid justify-center'>
        <h2 className='text-center py-8 text-2xl'>Kəşf et</h2>
        <div>
            <form className='flex relative items-center' onSubmit={handleSearchSubmit}>
            <input 
                type="text" 
                placeholder='Buraya söz daxil edin...'
                className='w-[400px] md:w-[500px] border-2 border-[#578FCA] rounded-[15px] px-4 py-2'
                value={searchTerm}
                onChange={handleSearch}
                />
                <button 
                    className='absolute right-2 flex items-center gap-1 bg-[#578FCA] rounded-[10px] px-3 py-1 cursor-pointer'>
                    Axtar <GoArrowRight /></button>
            </form>
        </div>

        <h2 className='text-center py-8 text-2xl'>Axtarış üçün nümunələr</h2>
        </div>

    <Card filteredWord={filteredWord}/>
    </div>
  )
}

export default Dictionary
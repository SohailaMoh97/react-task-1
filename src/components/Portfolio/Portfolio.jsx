import React from 'react'
import img1 from '../../assets/imgs/poert1.png'
import img2 from '../../assets/imgs/port2.png'
import img3 from '../../assets/imgs/port3.png'
export default function Portfolio() {
return (
    <>
    <div className='min-h-screen m-24'>
        <div className='text-center text-slate-700 p-8'>
            <h2 className='uppercase text-4xl font-bold p-3'>portfolio component </h2>
            <div className='flex  justify-center items-center '>
                <div className='h-[4px] w-[80px] bg-slate-700 '></div>
                <i className=" fa-solid fa-star px-4  "></i>
                <div className='h-[4px] w-[80px] bg-slate-700 '></div>
            </div>
        </div>
        
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 cursor-pointer auto-rows-max md:auto-rows-min">
            <div className='relative group'>
                <img className='rounded-lg' src={img1} alt="" />
                <div className='absolute inset-0 bg-teal-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <i className="fa-solid fa-plus text-7xl text-white"></i>
                </div>
            </div>
            <div className='relative group'>
                <img className='rounded-lg' src={img2} alt="" />
                <div className='absolute inset-0 bg-teal-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <i className="fa-solid fa-plus text-7xl text-white"></i>
                </div>
            </div>
            <div className='relative group'>
                <img className='rounded-lg' src={img3} alt="" />
                <div className='absolute inset-0 bg-teal-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <i className="fa-solid fa-plus text-7xl text-white"></i>
                </div>
            </div>
            <div className='relative group'>
                <img className='rounded-lg' src={img1} alt="" />
                <div className='absolute inset-0 bg-teal-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <i className="fa-solid fa-plus text-7xl text-white"></i>
                </div>
            </div>
            <div className='relative group'>
                <img className='rounded-lg' src={img2} alt="" />
                <div className='absolute inset-0 bg-teal-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <i className="fa-solid fa-plus text-7xl text-white"></i>
                </div>
            </div>
            <div className='relative group'>
                <img className='rounded-lg' src={img3} alt="" />
                <div className='absolute inset-0 bg-teal-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <i className="fa-solid fa-plus text-7xl text-white"></i>
                </div>
            </div>
            
        </div>
    </div>
    
    </>
)
}

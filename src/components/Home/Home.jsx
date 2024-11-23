import React from 'react'
import avatar from '../../assets/imgs/avatar.webp'
export default function Home() {
  return (<>
    <div className="   w-full bg-teal-500">
      <div className='flex flex-col justify-center content-center items-center justify-items-center  h-screen ' >
        <img src={avatar} alt="" className='p-2 ' />
        <div className='text-center text-white'>
          <h2 className='text-4xl font-bold uppercase p-6'>start Framework</h2>
          <div className='flex  justify-center items-center '>
                <div className='h-[4px] w-[80px] bg-white '></div>
                <i className=" fa-solid fa-star px-4  "></i>
                <div className='h-[4px] w-[80px]  bg-white '></div>
            </div>
          <p>Graphic Artist - Web Designer - Illustrator </p>
        </div>
      </div>
    </div>
  </>)
  
}

import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="info  flex  text-center justify-around bg-slate-700 text-white py-20 px-20">
        <div className='p-4 w-1/3'>
            <h2 className='text-2xl font-semibold pb-2'>LOCATION</h2>
            <p className='pb-2'>2215 John Daniel Drive</p>
            <p className='pb-2'>Clark, MO 65243</p>
        </div>
        <div className='p-4  w-1/3'>
            <h2 className='text-2xl font-semibold pb-2'>AROUND THE WEB</h2>
            <div className="icons flex justify-center gap-2">
              <div className=' border-2 rounded-full border-white'>
                <i className="fa-brands fa-facebook p-3"></i>
              </div>
              <div className=' border-2 rounded-full border-white'>
                <i className="fa-brands fa-twitter p-3"></i>
              </div>
              <div className=' border-2 rounded-full border-white'>
                <i className="fa-brands fa-linkedin p-3"></i>
              </div>   
              <div className=' border-2 rounded-full border-white'>
                <i className="fa-solid fa-globe p-3"></i> 
              </div> 
            </div>
        </div>
        <div className='p-4  w-1/3'>
            <h2 className='text-2xl font-semibold pb-2'>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>
        </div>
        
    </div>
    <div className="footer text-center bg-slate-800 text-white p-8">
        <p>Copyright © Your Website 2021</p>
    </div> 
    </>
)
}

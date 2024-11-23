import React from 'react'

export default function About() {
  return (
    <>
      <div className="about w-full bg-teal-500 text-white ">
        <div className='flex container p-5 m-auto flex-col justify-center content-center w-3/4 items-center justify-items-center h-screen  '>
            <div className='text-center p-10'>
              <h2 className='uppercase text-4xl font-bold p-3'>about component </h2>
              <div className='flex  justify-center items-center '>
                <div className='h-[4px] w-[80px]  bg-white '></div>
                <i className=" fa-solid fa-star px-4  "></i>
                <div className='h-[4px] w-[80px]  bg-white '></div>
              </div>
            </div>
            <div className='flex gap-2 ' >
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p> 
            </div>
        </div>
      </div>
    </>
  )
}

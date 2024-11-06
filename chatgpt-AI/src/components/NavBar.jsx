import React from 'react'

export default function NavBar() {
  return (
      <div>
          
          <nav className="w-full px-8 py-7 bg-[rgb(33,33,33)] text-white font-bold text-xl flex justify-between items-center fixed top-0 backdrop-blur-2xl">
        <div className="icons heading flex gap-7 justify-center items-center">
          <div className="icons hidden gap-5 justify-center items-center  lg:flex">
            <i className="ri-side-bar-fill text-2xl"></i>
            <i className="ri-chat-new-line text-2xl"></i>
          </div>

          <div className="hamburger lg:hidden">
            <i className="ri-menu-2-line text-3xl"></i>
          </div>

          <div className="heading flex justify-center translate-x-1/2
 lg:justify-start">
            <h2 className="text-2xl font-semibold lg:text-left">
              ChatGPT
            </h2>
          </div>
        </div>

        <div className="w-[50px] h-[50px] bg-blue-900 font-bold text-xl  justify-center items-center rounded-full hidden md:flex">
          F
        </div>
      </nav>


    </div>
  )
}

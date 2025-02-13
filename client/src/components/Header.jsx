import React from 'react'
import { leaLogo } from '../img/index'



const Header = () => {
  return (
    <header className="text-gray-50 bg-slate-900 body-font">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <a href="/" id="#home" className="cursor-pointer w-28">
              <img className="w-28 " src={leaLogo} alt="logo"/>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a href="/" className="mr-5 hover:text-yellow-300">Home</a>
              <a href="/services" className="mr-5 hover:text-yellow-300">Services</a>
              <a href="/bookings" className="mr-5 hover:text-yellow-300">Bookings</a>
              </nav>
          </div>
        </header>
  )
}

export default Header
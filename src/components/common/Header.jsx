import React from 'react'

const Header = () => {
  return (
    <div className='container pt-[40px] absolute z-20 inset-0 w-full object-cover'>
      <header className="text-white py-[20px]">
          {/* Your header content */}
          <div className="mx-auto flex justify-between items-center">
            <div className="text-[21px] lg:text-[33px] font-semibold tracking-[0.1em] leading-[35px] hover:text-[#323232] text-white font-montserrat uppercase">Bagratica</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">Shop</a>
              <a href="#" className="hover:text-gray-300">About</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </nav>
          </div>
        </header>
    </div>
  )
}

export default Header
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import CurrencySwitcher from './SwitchCurrency';


const Navbar = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const guarantees = [
    "Genuine & Official product guarantee",
    "Free shipping and returns"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % guarantees.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='container h-[40px] fixed top-0 left-0 z-10 w-full grid grid-cols-3 items-center bg-black text-white text-[14px] '>
      {/* Customer Service */}
      <div className='col-span-1 flex items-center justify-start'>
        <p>Customer Service (123) 456 7890</p>
      </div>

      <div className='col-span-1 flex items-center justify-center'>
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center uppercase font-medium text-[14px]"
            style={{ whiteSpace: 'nowrap' }}
          >
            
            {guarantees[currentIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className='col-span-1 flex items-center justify-end'>
      <CurrencySwitcher />
      </div>

    </div>
  )
}

export default Navbar
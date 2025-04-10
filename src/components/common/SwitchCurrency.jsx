// components/CurrencySwitcher.js
import React, { useState } from 'react';
import { useCurrency } from '../../hooks/useCurrency';
import vietnamflat from '../../assets/img/vietnam.png';
import usaflat from '../../assets/img/us.gif';

const CurrencySwitcher = () => {
  const { currency, toggleCurrency, setCurrency, exchangeRate } = useCurrency();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    toggleCurrency();
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectCurrency = (selectedCurrency) => {
    setCurrency(selectedCurrency);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Simple Toggle Button Version */}
      {/* 
      <button
        onClick={handleToggle}
        className="flex items-center space-x-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors"
      >
        <span>{currency}</span>
        <span className="text-xs text-gray-500">
          {currency === 'VND' ? '(₫)' : '($)'}
        </span>
      </button>
      */}

      {/* Dropdown Version */}
      <button
        onClick={handleDropdownToggle}
        className="flex items-center space-x-1  py-2 text-sm  rounded-md transition-colors"
      >
        <div className='w-[16px] h-[11px]'>
          <img src={currency == 'VND' ? vietnamflat : usaflat} alt="" className='w-full h-full object-cover'/>
        </div>

        <span>{currency}</span>

        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isDropdownOpen && (
        <div className="absolute right-0 mt-1 w-[100px] bg-white border border-gray-200 shadow-lg z-10 text-sm">
          <ul>
            <li 
              className={`px-4 py-2 gap-3 text-black hover:bg-gray-100 cursor-pointer flex items-center ${currency === 'VND' ? 'font-medium underline' : ''}`}
              onClick={() => handleSelectCurrency('VND')}
            >
              <div className='w-[16px] h-[11px]'>
                <img src={vietnamflat} alt="" className='w-full h-full object-cover'/>
              </div>
              <span className='text-black'>VND</span>
            </li>
            <li 
              className={`px-4 py-2 gap-3 text-black hover:bg-gray-100 cursor-pointer flex items-center ${currency === 'USD' ? 'font-medium underline' : ''}`}
              onClick={() => handleSelectCurrency('USD')}
            >
              <div className='w-[16px] h-[11px]'>
                <img src={usaflat} alt="" className='w-full h-full object-contain'/>
              </div>
              <span >USD</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CurrencySwitcher;
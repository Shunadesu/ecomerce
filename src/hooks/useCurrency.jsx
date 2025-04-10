// contexts/CurrencyContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the currency context
export const CurrencyContext = createContext();

// Custom hook to use the currency context
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

// Currency provider component
export const CurrencyProvider = ({ children }) => {
  // Get saved currency preference from localStorage or default to VND
  const [currency, setCurrency] = useState(() => {
    const savedCurrency = localStorage.getItem('currency');
    return savedCurrency || 'VND';
  });
  
  const [exchangeRate, setExchangeRate] = useState(24500); // Default rate

  // Format amount based on selected currency
  const formatAmount = (amount) => {
    if (amount === null || amount === undefined) return '';
    
    if (currency === 'VND') {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0
      }).format(amount);
    } else {
      const usdAmount = amount / exchangeRate;
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(usdAmount);
    }
  };

  // Convert amount from VND to the current currency
  const convertAmount = (amountInVND) => {
    if (currency === 'VND') return amountInVND;
    return amountInVND / exchangeRate;
  };

  // Switch currency between VND and USD
  const toggleCurrency = () => {
    const newCurrency = currency === 'VND' ? 'USD' : 'VND';
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  // Set a specific currency
  const setCurrencyValue = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  // Fetch exchange rate when component mounts
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        // In a real application, you would fetch the actual rate from an API
        // Example: 
        // const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        // const data = await response.json();
        // setExchangeRate(data.rates.VND);
        
        // Using a fixed rate for demonstration
        setExchangeRate(24500);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
    
    // Optionally set up an interval to update the rate periodically
    // const interval = setInterval(fetchExchangeRate, 3600000); // Update every hour
    // return () => clearInterval(interval);
  }, []);

  // Save currency preference when it changes
  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  return (
    <CurrencyContext.Provider 
      value={{ 
        currency, 
        exchangeRate,
        formatAmount,
        convertAmount,
        toggleCurrency,
        setCurrency: setCurrencyValue
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
import React from 'react'
import { ChevronLeft, ChevronRight, Heart, Search, ShoppingBag, User } from "lucide-react"
import Sidebar from './SideBar'

const Header = () => {
  return (
    <div className='pt-[40px] w-full bg-transparent fixed top-0 left-0 z-20'>
      <Sidebar />
    </div>
  )
}

export default Header
"use client"

import { useState } from "react"
import { ChevronRight, Search, User, Heart, ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

// Mega menu data from previous component
const megaMenuData = {
  "NEW IN": {
    columns: [
      {
        title: "MILANCELOS",
        items: ["Dincidunteros", "Gravidas", "Loremous", "Montemous", "Scelerisque Durnas"],
      },
      {
        title: "COSMOPOLIS",
        items: ["Bibendumetos", "Deuismod", "Milancelos", "Senectus"],
      },
      {
        title: "BIBENDUMETOS",
        items: ["Comodianos", "Dapboe", "Dapboes", "Gravidas"],
      },
    ],
    featuredProduct: {
      title: "[Sample Product 1] - Bag And Accessory Boutiques",
      image: "/placeholder.svg?height=300&width=300",
      originalPrice: "$201.00",
      salePrice: "$189.00",
      label: "For Sale",
    },
  },
  "LUXURY BAGS": {
    columns: [
      {
        title: "METROPOLIS",
        items: ["Bibendumetos", "Consequate", "Loremous", "Pellente Habitanto", "Pellentes Habitanto"],
      },
      {
        title: "LOREMIRUS",
        items: ["Dincidunteros", "Gravidas", "Loremous", "Montemous", "Scelerisque Durnas"],
      },
      {
        title: "ACCESSORIUS",
        items: ["Dincidunteros", "Gravidas", "Sale"],
      },
    ],
    featuredProduct: {
      title: "[Sample Product 2] - Luxury Leather Handbag",
      image: "/placeholder.svg?height=300&width=300",
      originalPrice: "$299.00",
      salePrice: "$249.00",
      label: "New Arrival",
    },
  },
  // Other menu categories
}

const categories = [
  { name: "NEW IN", hasSubmenu: true },
  { name: "LUXURY BAGS", hasSubmenu: true },
  { name: "BELTS", hasSubmenu: true },
  { name: "ACCESSORIES", hasSubmenu: true },
  { name: "SHOP THE LOOK", hasSubmenu: false },
  { name: "CARD HOLDERS", hasSubmenu: false },
  { name: "WALLETS", hasSubmenu: true },
  { name: "DEMO", hasSubmenu: true },
  { name: "PAGES", hasSubmenu: true },
  { name: "BUY BAGRATICA", hasSubmenu: true },
]

export default function HeaderWithSidebar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [menuVisible, setMenuVisible] = useState(false)
  const headerHeight = 100; // Approximate height of header in pixels
  const sidebarWidth = 250; // Width of the sidebar in pixels

  const handleMouseEnter = (category) => {
    if (megaMenuData[category]) {
      setActiveMenu(category)
      setMenuVisible(true)
    }
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
    setMenuVisible(false)
  }

  // Animation variants
  const headerBgVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  }

  const megaMenuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.4,
        staggerChildren: 0.05,
        delayChildren: 0.1
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    <div className='w-full bg-transparent relative'>
      {/* Top Navigation Bar */}
      <header className="relative z-30">
        <div className="container mx-auto flex justify-between items-center py-6">
          <div className="text-[21px] lg:text-[33px] font-semibold tracking-[0.1em] leading-[35px] font-montserrat uppercase">
            Bagratica
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm cursor-pointer">
              <Search size={20} />
              <span className="hidden sm:inline">Search</span>
            </button>
            <button className="cursor-pointer">
              <User size={20} />
            </button>
            <button className="cursor-pointer">
              <Heart size={20} />
            </button>
            <button className="relative cursor-pointer">
              <ShoppingBag size={20} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-xs text-white">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Animated header background */}
        <AnimatePresence>
          {menuVisible && (
            <motion.div 
              className="absolute inset-x-0 top-0 h-full bg-white -z-1"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={headerBgVariants}
            />
          )}
        </AnimatePresence>
      </header>
      
      <div className="container mx-auto flex relative">
        {/* Vertical Sidebar */}
        <aside 
          className="relative z-30" 
          style={{ width: `${sidebarWidth}px` }}
          onMouseLeave={handleMouseLeave}
        >
          <nav>
            <ul className="space-y-4 py-4">
              {categories.map((category) => (
                <li 
                  key={category.name} 
                  onMouseEnter={() => handleMouseEnter(category.name)} 
                  className="relative"
                >
                  <Link
                    to="/"
                    className={`flex items-center justify-between text-sm font-light ${
                      menuVisible ? 'text-stone-700 hover:text-stone-900' : 'text-white hover:text-gray-200'
                    }`}
                  >
                    {category.name}
                    {category.hasSubmenu && <ChevronRight size={16} />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Absolute positioned placeholder to maintain layout */}
        <div className="flex-1"></div>
      </div>
 
      {/* Full-width Mega Menu with absolute positioning */}
      <AnimatePresence>
        {activeMenu && megaMenuData[activeMenu] && (
          <motion.div
            className="fixed left-0 right-0 top-0 bg-white shadow-lg z-20"
            style={{ paddingTop: `${headerHeight}px` }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={megaMenuVariants}
            onMouseEnter={() => setMenuVisible(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto flex">
              {/* Sidebar placeholder - same width as the sidebar */}
              <div style={{ width: `${sidebarWidth}px` }} className="invisible">
                {/* This spacer ensures the mega menu content aligns with the main content area */}
              </div>
              
              {/* Mega Menu Content */}
              <div className="flex-1 py-12 px-12">
                <div className="flex">
                  <div className="flex-1 grid grid-cols-3 gap-8">
                    {megaMenuData[activeMenu].columns.map((column, idx) => (
                      <motion.div 
                        key={idx} 
                        className="space-y-4"
                        variants={itemVariants}
                      >
                        <h3 className="font-medium text-sm text-stone-800">{column.title}</h3>
                        <ul className="space-y-2">
                          {column.items.map((item, itemIdx) => (
                            <motion.li 
                              key={itemIdx}
                              variants={itemVariants}
                            >
                              <Link to="/" className="text-sm text-stone-600 hover:text-stone-900">
                                {item}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Featured Product */}
                  <motion.div 
                    className="w-72 pl-6"
                    variants={itemVariants}
                  >
                    <h3 className="font-medium text-sm text-stone-800 mb-4">FEATURED PRODUCTS</h3>
                    <div className="space-y-2">
                      <div className="relative h-64 w-full overflow-hidden">
                        <motion.img
                          src={megaMenuData[activeMenu].featuredProduct.image || "/placeholder.svg"}
                          alt="Featured product"
                          className="object-cover w-full h-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="space-y-1 mt-2">
                        <div className="text-xs text-stone-500">{megaMenuData[activeMenu].featuredProduct.label}</div>
                        <h4 className="text-sm font-medium">{megaMenuData[activeMenu].featuredProduct.title}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm line-through text-stone-500">
                            {megaMenuData[activeMenu].featuredProduct.originalPrice}
                          </span>
                          <span className="text-sm font-medium text-rose-500">
                            {megaMenuData[activeMenu].featuredProduct.salePrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
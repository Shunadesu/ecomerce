// "use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

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

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="md:hidden text-stone-700" aria-label="Open menu">
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/50 md:hidden">
          <div className="h-full w-4/5 max-w-xs bg-stone-100 p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-medium">Menu</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav>
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href="#"
                      className="block py-2 text-sm font-light text-stone-700 hover:text-stone-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

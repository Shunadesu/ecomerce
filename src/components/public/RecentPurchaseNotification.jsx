import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function RecentPurchaseNotification() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true) // hiện lại sau 10s
      }, 5000)
  
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false) // ẩn sau 5s
      }, 5000)
  
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 max-w-[30rem] left-4 z-50 flex items-start gap-3 rounded border border-stone-300 bg-white shadow-md"
        >
          <div className="h-full w-22">
            <img
              src="https://cdn11.bigcommerce.com/s-4kqhmhfa8l/images/stencil/90w/products/145/412/14887410-1-white__89233.1623336877.jpg"
              alt="Product thumbnail"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="text-sm p-4">
            <p className="text-stone-600">Someone recently bought a</p>
            <p className="font-medium text-stone-800 line-clamp-1">[Sample Product 7] - Bag And Accessory Boutique</p>
            <p className="mt-3 text-xs text-stone-500">16 minutes ago, from Sydney, AU</p>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-stone-400 hover:text-stone-600 p-2">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/common"

const Public = () => {
  return (
    <main className="w-full px-8 flex flex-col items-center justify-center">
        <div className="container">
            <Navbar />
        </div>
        <Outlet/>
    </main>
  )
}

export default Public
import { Outlet } from "react-router-dom"
import { Header, Navbar } from "../../components/common"

const Public = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center relative">
        <Navbar />
        <Header />
        <Outlet/>

    </main>
  )
}

export default Public
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const RootLayout = () => {
    return  (
        <div className="text-3xl font-bold underline"> 
            <Navbar />
            <main> <Outlet /> </main>
            <Footer />
        </div>

    )
}

export default RootLayout
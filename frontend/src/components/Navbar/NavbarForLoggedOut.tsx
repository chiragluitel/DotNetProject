import { Home, LogIn, PenBoxIcon } from "lucide-react"
import NavComponents from "./NavComponents"

const NavbarForLoggedOut = () => {
    return (
            <div className="flex gap-6 p-4 bg-black justify-between">
            
            <div>
                <NavComponents icon={<Home />} label="Home" />
            </div>

            <div className="flex gap-x-6">
                <NavComponents icon={ <LogIn />} label="Login" />
                <NavComponents icon={ <PenBoxIcon />} label="Signup" />
            </div>

            </div>
        
    )
}

export default NavbarForLoggedOut
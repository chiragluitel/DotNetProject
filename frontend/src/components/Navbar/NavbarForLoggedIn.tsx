import { Home, LogOut, User } from "lucide-react"
import NavComponents from "./NavComponents"

const NavbarForLoggedIn = () => {
    return (
        <div 
        className="flex p-4 bg-black justify-between">
            <div className="flex gap-6">
                <NavComponents icon={<Home />} label="Home" />
                <NavComponents icon={<Home />} label="Someplace" />
            </div>
            <div className="flex gap-6">
                <NavComponents icon={ <LogOut />} label="Logout" />
                <NavComponents icon={ <User />} label="Profile" />
            </div>
            
        </div>
    )
}

export default NavbarForLoggedIn
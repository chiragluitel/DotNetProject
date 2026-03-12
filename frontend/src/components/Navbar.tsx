import { useState } from "react";
import NavbarForLoggedIn from "./Navbar/NavbarForLoggedIn";
import NavbarForLoggedOut from "./Navbar/NavbarForLoggedOut";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return(
        <>
            {isLoggedIn? <NavbarForLoggedIn /> : <NavbarForLoggedOut />}
            {console.log("State: ", isLoggedIn)}
            {/* <button 
            className="cursor-pointer"
            onClick={() => setIsLoggedIn(!isLoggedIn)}> Click me to change nav </button> */}
        </>
        
    )
}

export default Navbar
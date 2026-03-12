import type { ReactElement } from "react"
import { useNavigate } from "react-router-dom"

interface NavComponentsProps {
    icon: ReactElement,
    label : string
}

const NavComponents = ({icon, label}: NavComponentsProps) => {
    const navigate = useNavigate();
    return (
        <div 
        className="flex items-center gap-2 cursor-pointer text-white"
        onClick={() => navigate(label)}>
            {icon} 
            <span> {label} </span>
        </div>
    )
}

export default NavComponents
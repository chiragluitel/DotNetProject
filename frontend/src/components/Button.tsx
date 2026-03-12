import type { ReactElement } from "react"

interface ButtonProps {
    label: string,
    icon?: ReactElement,
    onClick: () => void
}
const Button = ({label, icon, onClick}:ButtonProps) => {
    return (
        <div>
            <button 
                className="flex p-2 gap-2 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800"
                onClick={onClick}
            > 
            {icon}
            <span> {label} </span> 
            </button>
        </div>
    )
}

export default Button
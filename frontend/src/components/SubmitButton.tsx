import type { ReactElement } from "react"
import { useFormStatus } from "react-dom"

interface SubmitButtonProps {
    label: string,
    icon?: ReactElement,
}
const SubmitButton = ({label, icon}:SubmitButtonProps) => {
    const {pending} = useFormStatus();
    return (
        <div>
            <button 
                type="submit"
                className="flex p-2 gap-2 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800"
                disabled={pending}
            > 
            {icon}
            <span> {pending? "Processing" : label} </span> 
            </button>
        </div>
    )
}

export default SubmitButton
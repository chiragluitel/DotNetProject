import { useFormStatus } from "react-dom"
import SubmitButton from "../components/SubmitButton"
import { LogIn } from "lucide-react"

const Signup = () => {
    const handleSignup =(formdata: FormData)=>{
        const email = formdata.get("username")
        const password = formdata.get("password")
        console.log ('Submitted Form:', email, password)
    }
    const {pending} = useFormStatus();

    return (
        <div className="bg-gray-700 min-h-screen flex items-center justify-center">
            <div className="bg-white w-1/4 rounded-lg shadow-lg p-4 flex flex-col gap-4 ">

                <div>
                    <header className="text-3xl text-center pt-4 font-bold">
                        <h1 > Signup To Your Account </h1>
                    </header> 
                </div>
                
                <div>
                    <form action={handleSignup} className="flex flex-col items-center gap-4" >
                        <input 
                            type="name" 
                            name="name" 
                            placeholder="Full Name" 
                            className="bg-red-200 text-center border-3"
                        />

                        <input 
                        type="email" 
                        name="username" 
                        placeholder="Username" 
                        className="bg-red-200 text-center border-3"
                        />

                        <input
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        className="bg-red-200 text-center border-3"
                        />
                        <SubmitButton label="Submit" icon={<LogIn />} />
                    </form>
                </div>
                    
            </div>
        </div>
    )
}

export default Signup
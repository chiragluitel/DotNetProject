import SubmitButton from "../components/SubmitButton"
import { LogIn } from "lucide-react"

const Login = () => {
    const handleLogin = async (formdata: FormData)=>{
        const username = formdata.get("username") as string;
        const password = formdata.get("password") as string;

        try{
            const response = await fetch("http://localhost:5035/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    Username: username,
                    Password: password
                })
            })

            if(response.ok){
                const text = await response.text();
                console.log (text)
            }else if(response.status == 401){
                const text = await response.text();
                console.log(text)
            }else{
                console.log('Unknown code from backend', response.status)
            }
        }catch(error){
            console.error("Some error: ", error);
        }
    }

    return (
        <div className="bg-gray-700 min-h-screen flex items-center justify-center">
            <div className="bg-white w-1/4 rounded-lg shadow-lg p-4 flex flex-col gap-4 ">

                <div>
                    <header className="text-3xl text-center pt-4 font-bold">
                        <h1 > Login To Your Account </h1>
                    </header> 
                </div>
                
                <div>
                    <form action={handleLogin} className="flex flex-col items-center gap-4" >
                        <input 
                        type="text" 
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

export default Login
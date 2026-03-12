import { LogIn } from "lucide-react"
import Button from "./Button"

const LandingHero = () => {
    const handleClick = () =>{
        console.log('Button Clicked')
    }
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            <div className="md:w-1/2">
                <img
                className="w-full h-auto rounded-lg shadow-lg"
                 src="/ArtForWebsite.png" />
            </div>
            <div className="md:w-1/2 flex flex-col gap-4">
                <h1 className="text-4xl font-bold"> I love Trekking </h1>
                <p> This is me, I love trekking.
                    <br/>
                    I have climbed to <b>5100m Altitude</b>
                </p>
                
                <div className="pt-5">
                    <Button label="Login" onClick={handleClick} icon={<LogIn />} />
                </div>
            </div>

        </div>
    )
}
export default LandingHero
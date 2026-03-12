import LandingHero from "../components/LandingHero"

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            <div className="text-center pt-4"> 
                <h1 className="text-6xl font-bold"> Welcome to Chirag's Website </h1>
            </div>

            <div>
                <LandingHero />
            </div>
            
        </div>
    )
}

export default LandingPage
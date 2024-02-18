import { Link } from "react-router-dom"

export const Home = () => {
    return <>
        <div className="bg-neutral-300 h-screen flex items-center">
        <div className="bg-white h-fit w-2/6 m-auto rounded-2xl shadow-2xl">
            <div className="p-4 text-4xl font-bold text-center">
                Welcome to Payme 
            </div>
            <div className="flex justify-center text-center m-10">
            <Link className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-1/3 mr-10 bg-green-500 text-white" to="/signin">
                SignIn
            </Link>
            <Link className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-1/3 ml-10 bg-green-500 text-white" to="/signup">
                SignUp
            </Link>
            </div>
            <div className="py-2 mb-2 ml-20 text-sm flex justify-center">
                @Powered by Paytm India limited
            </div>
            </div>
        </div>
    </>
}

import { Link } from "react-router-dom";

export function Logout({buttonText, to}) {
    return <>
        <Link className="text-center ml-20 rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-2/3 bg-blue-500 text-white" to={to}>
            {buttonText}
        </Link>
    </>
}
import { Logout } from "../components/Logout"


export const Fail = () => {
    return <>
        <div className="m-2 font-bold">
            Payment failed ! <Logout buttonText={"go to dashoard"} to={"/dashboard"}/>
        </div>

    </>
}
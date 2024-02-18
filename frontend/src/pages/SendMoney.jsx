import { useSearchParams , useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Logout } from "../components/Logout";


export const SendMoney = () => {
    const navigate = useNavigate;
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    console.log(id);


    return <div className="bg-neutral-300 h-screen flex items-center">
        <div className="bg-white h-fit w-2/6 m-auto rounded-2xl shadow-2xl">
            <div className="p-4 text-4xl font-bold text-center">
                Send Money
            </div>
            <div className="mt-17 text-left ">
                <div className="pl-6 pt-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-2xl text-white"> { name[0].toUpperCase() } </span>
                        </div>
                        <h3 className="text-2xl font-semibold"> { name } </h3>
                    </div>
                </div>
                <div className="text-sm font-bold pl-8 pt-2">
                    <div>Amount (INR)</div>
                    <input
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        type="number"
                        className="flex h-10 w-11/12 mt-3 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />


                    <button onClick={async() => {
                        const response = await axios.post("https://payme-backend-cheb.onrender.com/api/v1/account/transfer", {
                            to: id,
                            amount
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                        console.log(response);
                        if(response.status == 200){
                            window.alert("payment successful")
                        }
                        else{
                            window.alert("payment failed")
                        }
                        }} className="justify-center rounded-md text-sm mt-5 mb-8 font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-11/12 bg-green-500 text-white">
                        Initiate Transfer
                    </button>


                </div>
            </div>
            <div className="mb-10 text-right mr-10">
            <Logout buttonText={"cancel pay"} to={"/dashboard"} />
            </div>
        </div>
    </div>
}
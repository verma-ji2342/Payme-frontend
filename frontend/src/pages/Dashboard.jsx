import { Appbar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/User"
import { useState, useEffect } from "react";

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://payme-backend-cheb.onrender.com/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
          });
          const newData = await response.json();
          const B = Math.round(newData.balance * 100) / 100
          setBalance(B);
          console.log(B);
        };
        
        fetchData();
      }, []);

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
          <Users />
        </div>
    </div>
}
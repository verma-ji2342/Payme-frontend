import { useState, useEffect } from "react";

export function Appbar() {
    const [username, setUserName] = useState("");
    const [firstChar, setChar] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://payme-backend-cheb.onrender.com/api/v1/user/username", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
          });
          const newData = await response.json();
          setUserName(newData.firstName);
          setChar(newData.firstName[0].toUpperCase());
          console.log(newData.firstName);
        };
        
        fetchData();
      }, []);


    return <div className="shadow h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-4">
        PayME App
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
            Hello, {username}
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                {firstChar}
            </div>
        </div>
    </div>
</div>
}
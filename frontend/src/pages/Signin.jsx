import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Signin = ()=>{
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        localStorage.removeItem('token');
    },[])

    return <>
        <div className="bg-gray-500 h-screen grid place-items-center">
            <div className="bg-white h-8/9 w-1/3 rounded-lg">
                <div className="grid place-items-center">
                    <Heading label={"SignIn"} />
                    <p className="p-2 text-gray-700 text-lg">Enter your credential to access your account</p>
                </div>
                <InputBox onChange={e => {
                    setUserName(e.target.value)
                }} placeholder={"johndeo@gmail.com"} label={"Email"} />
                <InputBox onChange={e => {
                    setPassword(e.target.value)
                }} placeholder={"123456**"} label={"Password"} />
                <div className="w-full p-5 grid place-items-center">
                    <Button onClick={async () => {
                        console.log(username);
                        console.log(password);
                        const response = await axios.post("https://payme-backend-cheb.onrender.com/api/v1/user/signin", {
                            username,
                            password
                        });
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")
                        console.log(response.data);
                    }} label={"Sign In"} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
        </div>
    </>
}
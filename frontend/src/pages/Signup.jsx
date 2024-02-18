import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Signup = ()=>{
    const navigate = useNavigate();
    
    useEffect(()=>{
        localStorage.removeItem('token');
    },[])

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return <>
        <div className="bg-gray-500 h-screen grid place-items-center">
            <div className="bg-white h-8/9 w-1/3 rounded-lg">
                <div className="grid place-items-center">
                    <Heading label={"Signup"} />
                    <p className="p-2 text-gray-700 text-lg">Enter your information to create an account</p>
                </div>
                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }} placeholder={"John"} label={"First Name"} />
                <InputBox onChange={e => {
                    setLastName(e.target.value)
                }} placeholder={"Doe"} label={"Last Name"} />
                <InputBox onChange={e => {
                    setUserName(e.target.value)
                }} placeholder={"johndeo@gmail.com"} label={"Email"} />
                <InputBox onChange={e => {
                    setPassword(e.target.value)
                }} placeholder={"123456**"} label={"Password"} />
                <div className="w-full p-5 grid place-items-center">
                    <Button onClick={async () => {
                        console.log(username);
                        console.log(lastName);
                        console.log(password);
                        console.log(firstName);
                        const response = await axios.post("https://payme-backend-cheb.onrender.com/api/v1/user/signup", {
                            username,
                            firstName,
                            lastName,
                            password
                        });
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")
                        console.log(response.data);
                    }} label={"Sign up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </>
}
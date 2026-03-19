import React, {useState} from 'react'
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { Toastontainr, toast} from 'react-toastify';

const Signup = () => {
    const navigatee = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });

    const {email, password, username} = inputValue;

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) => 
        toast.error (err, {
            position: "bottom-right",
        });
    const handleSuccess = (msg) => 
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3002/signup",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            if(success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigatee("/");
                }, 1000);
            }else {
                handleError(message);
            }
        } catch (e) {
            console.log(e);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password:"",
            username: "",
        });
    };
    return (
        <h1>hhh</h1>
    )
}

export default Signup;
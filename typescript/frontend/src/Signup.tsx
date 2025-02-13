import React, { useState } from "react"
import { useNavigate } from "react-router";

import api from "./services/api"

import './css/Signup.css'

interface IUser {
    username: string;
    email: string;
}

function Signup() {
    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>({
        username: "",
        email: ""
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        setUser(() => ({
            ...user,
            [name]: value,
        }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        async function fetchData() {
            await api.post('/users', user);
        }

        navigate("/")

        fetchData()
    }

    return (
        <div id="container">
            <div id="signup">
                <h2>Signup</h2>

                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input type="text" name="username" id="username" defaultValue={user.username} onChange={handleChange} placeholder="Username" />
                        <input type="email" name="email" id="email" defaultValue={user.email} onChange={handleChange} placeholder="Email" />
                    </div>

                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup

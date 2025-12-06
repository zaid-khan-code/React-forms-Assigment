import React, { useState } from "react";

export default function Login(props) {
    const savedUsers = JSON.parse(localStorage.getItem("StoredUser")) || [];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    function handleEvent(e) {
        e.preventDefault();



    }

    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-400 flex items-center justify-center p-4 transition-all duration-500">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fadeInScale">
                <form className="space-y-6" onSubmit={handleEvent}>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-slideDown">Login</h1>

                    {errorMessage && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded animate-shake">
                            <p className="font-semibold text-sm">{errorMessage}</p>
                        </div>
                    )}

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Email"
                            pattern="^[a-z][a-z0-9]*@[a-z0-9]+\.[a-z]{2,}$"
                            title="Email must start with a letter, contain @ and ., only lowercase letters and numbers"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 text-gray-800 placeholder-gray-400 hover:border-blue-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            placeholder="Enter your password"
                            pattern="^[a-z0-9]{8,}$"
                            required
                            title="Password must be at least 8 characters, only lowercase letters and numbers"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 text-gray-800 placeholder-gray-400 hover:border-blue-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-4 rounded-lg mt-8 hover:shadow-lg hover:scale-105 transition duration-300 transform active:scale-95 uppercase tracking-wider"
                    >
                        Login
                    </button>

                    <p className="text-center text-gray-600 text-sm">
                        Don't have an account?{' '}
                        <button
                            type="button"
                            onClick={() => {
                                props.Loggin(false);
                                document.getElementById("formele").reportValidity()
                            }}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Sign Up
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

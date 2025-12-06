import { React, useState } from 'react';

export default function SignUp(props) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("StoredUser")) || []);
    const [errorMessage, setErrorMessage] = useState('');


    function handleEvent(e) {
        e.preventDefault();

        // make the temp variable to store the forms object
        let forms = { FullName: fullName, Email: email, Password: password };

        // sets the new User into the users and check if its alredy exists

        const isDuplicate = users.some(user => user.Email === email);
        console.log(users.some(user => user.email === email));
        console.log(isDuplicate);
        if (isDuplicate) {
            setErrorMessage("User with this email already exists!");
            return;
        }
        setUsers(prev => {
            const allUser = [...prev, forms];
            localStorage.setItem("StoredUser", JSON.stringify(allUser));
            return allUser;
        });

    }



    function passwordChecker() {
        let submitBtn = document.getElementById("submit");
        let confirmPasswordField = document.getElementById("confirm-password");
        if (password !== confirmPassword) {
            submitBtn.classList.remove("bg-gradient-to-r", "from-emerald-600", "to-teal-600");
            submitBtn.disabled = true;
            submitBtn.classList.add("bg-gray-400", "cursor-not-allowed");
            confirmPasswordField.classList.add("border-red-500", "ring-2", "ring-red-500");
            confirmPasswordField.classList.remove("border-gray-300");
            setErrorMessage("Password and Comfirm password are not match")
            return
        }
        else {
            submitBtn.classList.add("bg-gradient-to-r", "from-emerald-600", "to-teal-600");
            submitBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
            submitBtn.disabled = false;
            confirmPasswordField.classList.remove("border-red-500", "ring-2", "ring-red-500");
            confirmPasswordField.classList.add("border-gray-300");
            setErrorMessage("");
            return
        }
    }





    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-400 flex items-center justify-center p-4 transition-all duration-500">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fadeInScale">
                <form onSubmit={handleEvent} className="space-y-6" id='formele'>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-slideDown">Sign Up</h1>

                    {errorMessage && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded animate-shake">
                            <p className="font-semibold text-sm">{errorMessage}</p>
                        </div>
                    )}

                    <div className="space-y-2">
                        <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            required
                            onChange={(e) => { setFullName(e.target.value) }}
                            title="Enter your Full Name "
                            placeholder="Enter your full name"
                            pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 text-gray-800 placeholder-gray-400 hover:border-blue-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                            placeholder="Enter your email"
                            pattern="^[a-z][a-z0-9]*@[a-z0-9]+\.[a-z]{2,}$"
                            title="Email must start with a letter, contain @ and ., only lowercase letters and numbers"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 text-gray-800 placeholder-gray-400 hover:border-blue-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="upPassword" className="block text-sm font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="upPassword"
                            name="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            placeholder="Enter your password"
                            pattern="^[a-z0-9]{8,}$"
                            required
                            title="Password must be at least 8 characters, only lowercase letters and numbers"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 text-gray-800 placeholder-gray-400 hover:border-blue-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                            onKeyDown={passwordChecker}
                            onKeyUp={passwordChecker}
                            placeholder="Confirm your password"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 text-gray-800 placeholder-gray-400 hover:border-blue-300"
                        />
                    </div>

                    <input
                        type="submit" id='submit' value="Sign Up"
                        className="w-full cursor-pointer bg-linear-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 px-4 rounded-lg mt-8 hover:shadow-lg hover:scale-105 transition duration-300 transform active:scale-95 uppercase tracking-wider"
                    />

                    <p className="text-center text-gray-600 text-sm">
                        Already have an account?{' '}
                        <button
                            type="button"
                            onClick={() => {
                                props.Loggin(true);
                                document.getElementById("formele").reportValidity()
                            }}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Login
                        </button>
                    </p>

                </form>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react';

const AuthApp = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                {!currentUser ? (
                    <>
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                            {isLoginMode ? 'Login' : 'Sign Up'}
                        </h2>

                        {message && (
                            <div className={`mb-4 p-3 rounded-lg text-center ${message.includes('success') || message.includes('Success')
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                                }`}>
                                {message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {!isLoginMode && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="Enter your username"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {!isLoginMode && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
                            >
                                {isLoginMode ? 'Login' : 'Sign Up'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <button
                                onClick={switchMode}
                                className="text-blue-600 hover:text-blue-800 font-medium transition"
                            >
                                {isLoginMode
                                    ? "Don't have an account? Sign Up"
                                    : "Already have an account? Login"}
                            </button>
                        </div>

                        {users.length > 0 && (
                            <div className="mt-6 text-center">
                                <button
                                    onClick={clearAllUsers}
                                    className="text-red-600 hover:text-red-800 text-sm transition"
                                >
                                    Clear All Users
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Welcome, {currentUser.username}!
                        </h2>
                        <p className="text-gray-600 mb-2">Email: {currentUser.email}</p>
                        <p className="text-gray-600 mb-6">User ID: {currentUser.id}</p>

                        {message && (
                            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                                {message}
                            </div>
                        )}

                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 font-medium"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthApp;
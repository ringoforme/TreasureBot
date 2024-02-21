import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/user/signup", {
        email,
        password,
      });
      console.log("User created:", response.data);

      setErrorMessage(""); // Reset error message and handle success
      // Handle success (e.g., show a message, redirect, etc.)
      setSuccessMessage(
        "You have Signed Up Successfully! Redirecting you to the Log-in Page!"
      );

      //等待

      setTimeout(() => {
        navigate("/user/login");
      }, 3000);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data);
      } else {
        console.error("Error signing up:", error);
        //a generic error message
        setErrorMessage("An error occurred while signing up.");
      }
    }
  };

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register as a Member
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6" action="#" method="POST"> */}

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleSignUp}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up!
              </button>
            </div>
          </form>
          {/* 成功消息 */}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="error-message">
              {errorMessage}
              {errorMessage.includes("already registered") && (
                <a
                  href="/user/login"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Log in here
                </a>
              )}
            </div>
          )}
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

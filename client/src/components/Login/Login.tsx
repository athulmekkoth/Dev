// src/components/LoginPage.tsx
import React, { useState } from 'react';

import { MouseEvent } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from 'react-redux';
type Inputs = {
  password: string
  email: string
}

const LoginPage: React.FC = () => {
  const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => dispatch(data)

  console.log(watch("password"))
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
          
              {...register("email")}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              
              {...register("password")}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
           
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useEffect } from "react";
import { loginUser } from  "../../redux/store/slices/Userslice"
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";

type Inputs = {
  password: string;
  email: string;
};

const LoginPage: React.FC = () => {




  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const pending = useSelector((state: RootState) => state.user.pending);
  const rejected = useSelector((state: RootState) => state.user.rejected);

  const { register, handleSubmit } = useForm<Inputs>();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const resultAction = await dispatch(loginUser(data));
      if (loginUser.rejected.match(resultAction)) {
        console.error("Login failed:", resultAction.error.message);
      }
      else{
        navigate("/")
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
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
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
            disabled={pending}
          >
            {pending ? "Logging in..." : "Login"}
          </button>
          {rejected && <p className="text-red-500 mt-2">Login failed. Please try again.</p>}
        </form>
        <Link to="/signup" className="text-blue-500 mt-4 block text-center">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

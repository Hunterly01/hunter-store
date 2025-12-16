import { Link, useNavigate } from "react-router";
import { useState } from "react";
import Rectangle from "../../assets/Rectangle.png";
import { useLoginMutation } from "../../Apis/LoginApis";

const Login = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();

      console.log("LOGIN SUCCESS 👉", response);

      localStorage.setItem("token", response.token);
      navigate("/products");
    } catch (err) {
      console.error("LOGIN FAILED 👉", err);
    }
  };

  return (
    <div className="flex h-screen font-sans bg-slate-100">

      {/* LEFT */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-10">
        <h2 className="text-2xl font-bold mb-10">Log in</h2>

        <form onSubmit={submitHandler} className="flex flex-col">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="p-3 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-3 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="p-3 mb-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>

          {isError && (
            <p className="text-red-500 text-sm mb-2">
              {error?.data?.message || "Invalid username or password"}
            </p>
          )}

          <p className="text-sm mb-4">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </p>

          <div className="flex items-center gap-3 text-gray-400 mb-4">
            <hr className="flex-1" />
            <span>Or</span>
            <hr className="flex-1" />
          </div>

          <div className="flex gap-3 mb-4">
            <button type="button" className="flex-1 p-3 border rounded-md">
              Continue with Google
            </button>
            <button type="button" className="flex-1 p-3 border rounded-md">
              Continue with Facebook
            </button>
          </div>

          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-bottom p-10 items-start justify-center text-center"
        style={{ backgroundImage: `url(${Rectangle})` }}
      >
        <div className="text-lg leading-relaxed max-w-md">
          <p>
            "The future belongs to those who{" "}
            <span className="text-blue-600 font-bold">believe</span> in the{" "}
            <span className="text-blue-600 font-bold">
              beauty of their dreams
            </span>
            ."
          </p>
          <p className="mt-4 font-medium">— Eleanor Roosevelt</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

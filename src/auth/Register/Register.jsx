import { Link } from "react-router";
import Unsplash from "../../assets/unsplash.png";

const Register = () => {
  return (
    <div className="flex h-screen font-sans bg-white">

      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-bottom bg-no-repeat bg-fixed p-10 
                   items-start justify-center text-center"
        style={{ backgroundImage: `url(${Unsplash})` }}
      >
        <div className="text-lg leading-relaxed text-black max-w-md">
          <p>
            The only way to{" "}
            <span className="text-blue-600 font-bold">do great work</span> is to{" "}
            <span className="text-blue-600 font-bold">
              love what you do
            </span>
          </p>
          <p className="mt-4 font-medium">— Steve Jobs</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-10">
        <h2 className="text-2xl font-bold mb-6">Sign up</h2>

        <form className="flex flex-col">
          <label className="mt-2 mb-1 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 mb-4 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="mt-2 mb-1 font-semibold">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-4 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="mt-2 mb-1 font-semibold">Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat Password"
            className="p-3 mb-4 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="p-3 mb-4 bg-blue-600 text-white rounded-md 
                       hover:bg-blue-700 transition"
          >
            Sign up
          </button>

          <div className="flex gap-3 mb-4">
            <button
              type="button"
              className="flex-1 p-3 border border-gray-300 rounded-md 
                         hover:bg-gray-100 transition"
            >
              Continue with Google
            </button>

            <button
              type="button"
              className="flex-1 p-3 border border-gray-300 rounded-md 
                         hover:bg-gray-100 transition"
            >
              Continue with Facebook
            </button>
          </div>

          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>

    </div>
  );
};

export default Register;

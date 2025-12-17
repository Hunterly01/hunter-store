import { Link } from "react-router";
import Products from "./Products"; 
import cart from "../assets/cart.png";
import ProductStyle from "./ProductStyle";
import FooterStyle from "./FooterStyle";
const HomePage = () => {
    return (
        <div>
            <div className="w-full bg-black text-white text-sm flex items-center justify-center px-4 py-2">
                <p className="text-center">Sign up and get{" "}<span className="font-semibold">20% off</span>{" "}
                your first order!
                 <Link
                to="/register"
                className="underline font-medium hover:text-gray-300 transition"
                >
                 Sign Up Now
                 </Link>
                </p>   
            </div>
            <nav className="w-full bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
                    <p className="text-2xl font-extrabold tracking-tight">
                        HUNTER.STORE
                    </p>
                    <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-690">
                        <li className="hover:text-black cursor-pointer ">Shop</li>
                        <li className="hover:text-black cursor-pointer ">on sale</li>
                        <li className="hover:text-black cursor-pointer ">new arrivals</li>    
                    </ul>
                    <div className="flex-1 hidden md:flex">
                        <div className="relative w-full max-w-md">                        
                            <input type="text"
                            placeholder="Search for products" 
                            className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-full text-sm "/>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/cart" className="relative">
                        <img src={cart} alt="Cart" className="w-6 h-6 object-contain hover:scale-110 transition"/>
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
                        </Link>
                    
                    </div>

                </div>

            </nav>
            <ProductStyle />
            <Products />
            <FooterStyle />
        </div>
    );
}

export default HomePage;
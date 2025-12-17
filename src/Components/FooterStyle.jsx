import { Facebook, Twitter, Instagram } from "lucide-react";
import apple from "../assets/apple.jpg";
import googlepng from "../assets/googlepng.webp";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import visa from "../assets/visa.jpeg";
const FooterStyle = () => {
  return (
    <div className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold">HUNTER.SHOP</h2>
          <p className="text-sm text-gray-500 mt-4 max-w-sm">
            We have product that suits your style <br />
             and which you're proud to use. <br />
            ForAll.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-black hover:text-white transition cursor-pointer">
              <Twitter size={16} />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-black hover:text-white transition cursor-pointer">
              <Facebook size={16} />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-black hover:text-white transition cursor-pointer">
              <Instagram size={16} />
            </span>
          </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest">COMPANY</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
         </div>

         <div>
          <h3 className="text-sm font-semibold tracking-widest">HELP</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

         <div>
          <h3 className="text-sm font-semibold tracking-widest">FAQ</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest">RESOURCES</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>

        <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Hunter.co © 2000-2023, All Rights Reserved</p>

    
          <div className="flex items-center gap-3">
            <img src={visa} alt="Visa" className="h-5" />
            <img src={mastercard} alt="Mastercard" className="h-5" />
            <img src={paypal} alt="Paypal" className="h-5" />
            <img src={apple} alt="Apple Pay" className="h-5" />
            <img src={googlepng} alt="Google Pay" className="h-5" />
          </div>
        </div>
    </div>
    </div>
      );
};

export default FooterStyle;
import R from "../assets/R.png";
const productStyles = () => {
    return (
       <div className="bg-[#f6f6f6]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
                    FIND PRODUCTS <br />
                    THAT MATCHES  <br />
                    YOUR STYLE <br />
                    & PREFERENCES
                </h1>   
                <p className="mt-6 text-gray-500 mx-wd-md">
                    Explore a wide range of products tailored to your unique style and preferences.
                     Discover items that resonate with you and elevate your lifestyle.
                </p>
                <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                    Shop Now
                </button>

            <div className="flex gap-10 mt-12">
                <div>
                     <h2 className="text-2xl font-bold">200+</h2>
                     <p className="text-sm text-gray-500">International Brands</p>
                </div>

                <div>
                     <h2 className="text-2xl font-bold">2,000+</h2>
                     <p className="text-sm text-gray-500">High-Quality Products</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">30,000+</h2>
                    <p className="text-sm text-gray-500">Happy Customers</p>
                </div>
          </div>
            </div>
            <div className="relative">
                <img 
                src={R}
                 alt="Grocery"
                 className="w-full object-cover" />
                <span className="absolute top-10 left-10 text-2xl ">✦</span>
            </div>
            <div className="bg-black py-6 mt-10 md:mt-0 rounded-lg">
                <div className="max-w-7xl mx-auto flex justify-around items-center text-white text-lg font-semibold tracking-wide"> 
                    <span>OLIVE</span>
                    <span>DANGOTE</span>
                    <span>SUPREME</span>
                    <span>MAKEUP</span>
                </div>
            </div>
        </div>
       </div>
    );
}

export default productStyles;
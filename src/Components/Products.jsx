import React from "react";
import { useGetProductsQuery } from "../Apis/ProductApis";

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading)
    return <p className="text-center text-lg mt-10">Loading...</p>;

  if (error)
    return (
      <p className="text-center text-red-500 mt-10">
        Error loading products
      </p>
    );

  return (
    <>

    


      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                   gap-5 p-5 text-center items-center"
      >
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center gap-2"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-50 h-50 rounded-lg shadow-md
                         hover:scale-110 transition duration-300"
            />

            <h1 className="text-base font-semibold text-black">
              {product.title}
            </h1>

            <h2 className="text-lg font-normal text-amber-700">
              {product.category}
            </h2>

            <p className="text-gray-500 text-base font-normal">
              ${product.price}
            </p>
          </div>
        ))}
      </div>

      <p className="text-black text-base font-bold tracking-[6px] text-center mt-6">
        FEATURED ITEMS
      </p>
    </>
  );
};

export default Products;

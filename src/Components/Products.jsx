import { Link } from "react-router";
import { useGetProductsQuery } from "../Apis/ProductApis";

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">Error loading products</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data?.products?.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="border p-4 rounded hover:shadow transition"
        >
        <img
         src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-contain rounded bg-gray-100"
        />

          <h2 className="font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default Products;

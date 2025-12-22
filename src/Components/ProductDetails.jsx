import { useParams } from "react-router";
import { useDispatch} from "react-redux";
import { useGetProductsQuery } from "../Apis/ProductApis";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductsQuery();

  const product = data?.products?.find(
    (p) => p.id === Number(id)
  );

  if (isLoading || !product)
    return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="rounded-lg w-full"
      />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-2">
          {product.description}
        </p>
        <p className="text-xl font-semibold mt-4">
          ${product.price}
        </p>

      </div>
    </div>
  );
};

export default ProductDetails;

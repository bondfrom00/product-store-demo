import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product, ProductDetail } from "../../types/api";

export const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const productId = Number(id);
  const [productsArray, setProductsArray] = useState<Product>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductsArray(data);
        setLoading(false);
      });
  }, []);

  const product =
    productsArray &&
    productsArray.products?.filter(
      (product: ProductDetail) => product.id === productId,
    );

  if (loading) return <>loading...</>;

  return (
    <>
      {product && (
        <div className="w-full p-4">
          {product.map((pro) => (
            <>
              <div className="mb-12 bg-[#1a1c23]">
                <div>
                  <h1>{pro?.title}</h1>
                  <p>{pro?.brand}</p>
                </div>
                <p>
                  {"$"}
                  {pro.price}
                  {pro.discountedPercentage > 0 && (
                    <>
                      {"%"}
                      {pro.discountedPercentage}
                    </>
                  )}
                </p>
                <img src={pro.thumbnail} />
                <div className="flex flex-col gap-2">
                  <div>
                    <span className="block font-medium">About</span>
                    <p>{pro.description}</p>
                  </div>
                  <span>
                    {pro.shippingInformation} | {pro.returnPolicy}
                  </span>
                </div>
              </div>

              <div>
                <p className="inline-block !mb-2">Customer reviews</p>
                <div className="flex flex-col gap-2">
                  {pro.reviews.map((review, index) => (
                    <div key={index} className="bg-[#1a1c23]">
                      <div className="mb-2">
                        <p>
                          {review.reviewerName} {"("}
                          {review.reviewerEmail}
                          {")"}
                        </p>
                        <div>{review.comment}</div>
                      </div>
                      <div>{review.rating} stars</div>
                      <div>{review.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
};

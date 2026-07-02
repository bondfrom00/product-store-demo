import React, { useEffect, useState } from "react";
import type { Product, ProductDetail } from "../../types/api";
import { Link } from "react-router";

export const Products: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [productsArray, setProductsArray] = useState<Product[]>([
    {
      products: [
        {
          id: 0,
          title: "",
          description: "",
          category: "",
          price: 0,
          discountedPercentage: 0,
          rating: 0,
          stock: 0,
          tags: [""],
          brand: "",
          sku: "",
          weight: 0,
          dimensions: {
            width: 0,
            height: 0,
            depth: 0,
          },
          warrantyInformation: "",
          shippingInformation: "",
          availabilityStatus: "",
          reviews: [
            {
              rating: 0,
              comment: "",
              date: "",
              reviewerName: "",
              reviewerEmail: "",
            },
          ],
          returnPolicy: "",
          minimumOrderQuantity: 0,
          meta: {
            createdAt: "",
            updatedAt: "",
            barcode: "",
            qrCode: "",
          },
          images: [""],
          thumbnail: "",
        },
      ],
      limit: 0,
      skip: 0,
      total: 0,
    },
  ]);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductsArray(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <>loading...</>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-4">
      {productsArray.products?.map((product: ProductDetail) => (
        <div className="w-full" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img src={product.thumbnail} className="mb-4 bg-[#1a1c23] w-full" />
          </Link>
          <div className="flex flex-col">
            <span className="block">{product.title}</span>
            <span>
              {"$"}
              {product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

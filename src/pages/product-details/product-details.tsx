import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product, ProductDetail } from "../../types/api";
import { Spinner } from "@/components/ui/spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stars } from "@/components/ui/stars";

export const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const productId = Number(id);
  const [productsArray, setProductsArray] = useState<Product>();
  const [loading, setLoading] = useState(false);

  // TODO: create context
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
    productsArray.products.filter(
      (product: ProductDetail) => product.id === productId,
    );

  if (loading) {
    return (
      <div className="h-dvh content-center m-auto w-fit">
        <Spinner className="size-8" strokeWidth={2} />
      </div>
    );
  }

  if (!product) return null;

  console.log(product);

  return (
    <div className="p-4">
      {product.map((item) => (
        <>
          <div className="mb-12 py-2">
            <div className="flex flex-col lg:flex-row">
              {item.images.length > 1 ? (
                <div className="grid lg:shrink shrink-0 lg:grid-cols-2 grid grid-cols-auto gap-1 [&>img:not(:last-child)]:hidden lg:[&>img:not(:last-child)]:block w-full">
                  {item.images.map((product) => (
                    <img className="bg-[#1a1c23]" src={product} />
                  ))}
                </div>
              ) : (
                <img
                  className="lg:w-1/2 w-full bg-[#1a1c23] shrink-0"
                  src={item.thumbnail}
                />
              )}
              <div className="w-full lg:px-4">
                <h1 className="!mb-4">{item.title}</h1>
                <p>{item.brand}</p>
                <div>
                  <h2>
                    {"$"}
                    {item.price}
                  </h2>
                  {item.discountPercentage > 0 && (
                    <>
                      {"%"}
                      {item.discountPercentage}
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <Tabs defaultValue="overview">
                    <TabsList variant="line">
                      <TabsTrigger value="overview" className="text-md">
                        Description
                      </TabsTrigger>
                      <TabsTrigger value="delivery" className="text-md">
                        Delivery
                      </TabsTrigger>
                      <TabsTrigger value="reports" className="text-md">
                        Dimensions
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="text-md pl-2.5">
                      {item.description}
                    </TabsContent>
                    <TabsContent value="delivery" className="text-md pl-7">
                      <ul className="list-disc">
                        <li>{item.shippingInformation}</li>
                        <li>{item.returnPolicy}</li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="reports" className="text-md pl-2.5">
                      {item.dimensions.width} x {item.dimensions.height}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex flex-col mb-8">
              <h2 className="inline-block font-semibold">Customer reviews</h2>
              <div>
                <span className="mr-4 block">Overall rating</span>
                <span className="font-medium text-[32px]">{item.rating}</span>
                <div>
                  <Stars {...item} />
                  <span>
                    {"("}
                    {item.reviews.length} reviews{")"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {item.reviews.map((review, index) => (
                <div
                  key={index}
                  className="border-b pb-2 grid grid-cols-[1fr_auto] items-baseline-last"
                >
                  <div className="mb-2">
                    <div className="font-medium">
                      {review.reviewerName} {"("}
                      {review.reviewerEmail}
                      {")"}
                    </div>
                    <div>{review.comment}</div>
                  </div>
                  <div>
                    <div>{review.date}</div>
                    <Stars {...item} rating={review.rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

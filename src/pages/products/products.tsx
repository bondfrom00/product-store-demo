import React, { useEffect, useState } from "react";
import type { Product, ProductDetail } from "../../types/api";
import { Link } from "react-router";
import { Spinner } from "@/components/ui/spinner";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Products: React.FC = () => {
  const [productsArray, setProductsArray] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sorted, setSorted] = useState<
    "lowest" | "highest" | "best" | "reviews" | ""
  >("");

  // TODO: create context obj for this
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductsArray(data);
        setLoading(false);
      });
  }, []);

  let sortedData = productsArray;

  const sortByLowest = () => {
    setSorted("lowest");
    sortedData = productsArray?.products.sort(
      (a: ProductDetail, b: ProductDetail) => a.price - b.price,
    );
  };
  const sortByHighest = () => {
    setSorted("highest");
    sortedData = productsArray?.products.sort(
      (a: ProductDetail, b: ProductDetail) => b.price - a.price,
    );
  };
  const sortByBest = () => {
    setSorted("best");
    sortedData = productsArray?.products.sort(
      (a: ProductDetail, b: ProductDetail) => b.rating - a.rating,
    );
  };
  const sortByRelevance = () => {
    setSorted("");
  };

  if (loading)
    return (
      <div className="h-dvh content-center m-auto w-fit">
        <Spinner className="size-8" />
      </div>
    );

  return (
    <div className="p-4">
      <div className="filter-options mt-4 my-8">
        <RadioGroup defaultValue="comfortable" className="inline-flex w-max">
          <Field orientation="horizontal">
            <RadioGroupItem
              value="default"
              id="desc-r1"
              onClick={sortByLowest}
            />
            <FieldContent>
              <FieldLabel htmlFor="lowest" className="whitespace-nowrap">
                Lowest
              </FieldLabel>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem
              value="comfortable"
              id="desc-r2"
              onClick={sortByHighest}
            />
            <FieldContent>
              <FieldLabel htmlFor="highest" className="whitespace-nowrap">
                Highest
              </FieldLabel>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="best" id="desc-r3" onClick={sortByBest} />
            <FieldContent>
              <FieldLabel htmlFor="desc-r3" className="whitespace-nowrap">
                Best selling
              </FieldLabel>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="" id="desc-r4" onClick={sortByRelevance} />
            <FieldContent>
              <FieldLabel htmlFor="desc-r3" className="whitespace-nowrap">
                Relevance
              </FieldLabel>
            </FieldContent>
          </Field>
        </RadioGroup>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {sortedData?.products?.map((product: ProductDetail) => (
          <div className="w-full" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.thumbnail}
                className="mb-4 bg-[#1a1c23] w-full"
              />
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
    </div>
  );
};

import type { ProductDetail } from "@/types/api";

export const Stars = (product: ProductDetail) => {
  return (
    <div
      className="stars"
      style={{ "--rating": product.rating } as React.CSSProperties}
    >
      <div className="bg">★★★★★</div>
    </div>
  );
};

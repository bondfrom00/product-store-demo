import type React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

export const CategorizedProduct: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  useEffect(() => {
    console.log(pathnames);
  }, [pathnames]);

  return <div>{pathnames}</div>;
};

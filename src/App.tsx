import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Products } from "./pages/products";
import { ProductDetails } from "./pages/product-details";
import { Home } from "./pages/home";
import { Layout } from "./components/ui";
import { About } from "./pages/about";
import { CategorizedProduct } from "./pages/products/categorized-product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route
              path="/products/category/:category"
              element={<CategorizedProduct />}
            />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

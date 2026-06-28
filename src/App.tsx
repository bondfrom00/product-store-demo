import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Products } from "./pages/products";
import { ProductDetails } from "./pages/product-details";
import { Home } from "./pages/home";
import { Layout } from "./components/ui";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

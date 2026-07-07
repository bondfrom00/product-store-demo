import { Outlet } from "react-router";
import { Header } from "./header";

export const Layout: React.FC = () => (
  <div className="relative">
    <Header />
    <Outlet />
  </div>
);

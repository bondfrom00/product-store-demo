import { Outlet } from "react-router";

export const Layout: React.FC = () => (
  <div className="relative">
    <Outlet />
  </div>
);

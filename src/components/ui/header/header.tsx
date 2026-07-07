import { Link, NavLink } from "react-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const Header: React.FC = () => {
  return (
    <header className="bg-[#0f1014] z-[50] sticky top-0 w-full flex flex-row items-center justify-between p-4">
      <div>store</div>
      <div className="flex flex-row items-center [&>div:not(:last-child)]:mr-4">
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="products"
          >
            Shop
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="about"
          >
            About
          </NavLink>
        </div>
      </div>
    </header>
  );
};

import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  KeyboardMusic,
  Settings2,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const drawer = document.getElementById("my-drawer-3") as HTMLInputElement;

    if (drawer && drawer.checked) {
      drawer.checked = false;
    }
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col">
      <div className="drawer lg:drawer-open fixed">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 text-2xl">Zerona</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* photo profile */}
            <div className="flex flex-col items-center mt-15">
              <div className="w-30 h-30 rounded-full overflow-hidden shadow-lg ">
                <img
                  src="/public/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Sidebar content here */}

            <Link className="flex items-center gap-6 mt-13 text-lg" to={"/"}>
              <LayoutDashboard size={30} />
              Dasboard
            </Link>
            <Link className="flex items-center gap-6 mt-6 text-lg" to={"/user"}>
              <Users size={30} />
              User
            </Link>
            <Link
              className="flex items-center gap-6 mt-6 text-lg"
              to={"/orders"}
            >
              <ShoppingCart size={30} />
              Orders
            </Link>
            <Link
              className="flex items-center gap-6 mt-6 text-lg"
              to={"/products"}
            >
              <KeyboardMusic size={30} />
              Products
            </Link>
            <Link
              className="flex items-center gap-6 mt-6 text-lg"
              to={"settings"}
            >
              <Settings2 size={30} />
              Settings
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

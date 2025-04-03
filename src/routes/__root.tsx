import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../index.css";

export const Route = createRootRoute({
  component: () => (
    <div className="min-w-screen min-h-screen bg-indigo-600 text-white">
      <div className="p-4 flex items-center gap-2 bg-indigo-900">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/other" className="[&.active]:font-bold">
          Other
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});

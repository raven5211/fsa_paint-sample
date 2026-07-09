import { Outlet } from "react-router";
import Navbar from "./Navbar";

/** Main application layout */
export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

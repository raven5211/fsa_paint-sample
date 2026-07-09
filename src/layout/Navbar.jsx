import { NavLink } from "react-router";

/** Site navigation links */
export default function Navbar() {
  return (
    <header>
      <p>Paint Samples</p>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/colors"}>Colors</NavLink>
      </nav>
    </header>
  );
}

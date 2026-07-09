import { Link } from "react-router";

const COLORS = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
];

/** List of default wallpaper colors */
export default function Colors() {
  return (
    <ul id="colors">
      {COLORS.map((color) => (
        <Swatch key={color} color={color} />
      ))}
    </ul>
  );
}

/** A swatch that navigates the user to the wallpaper of that color */
function Swatch({ color }) {
  return (
    <li>
      <Link to={color}>
        <figure className="swatch">
          <div style={{ background: color }}></div>
          <figcaption>{color}</figcaption>
        </figure>
      </Link>
    </li>
  );
}

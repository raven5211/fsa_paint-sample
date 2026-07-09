import { Link, useParams } from "react-router";

/** Displays the current page as the wallpaper color */
export default function Wallpaper() {
  const { color } = useParams();

  return (
    <div id="wallpaper" style={{ background: color }}>
      <section>
        <h1>{color}</h1>
        <Link to={"/colors"}>Back to all colors</Link>
      </section>
    </div>
  );
}

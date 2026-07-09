import { Routes, Route } from "react-router";

import Home from "./Home";
import Colors from "./colors/Colors";
import Wallpaper from "./colors/Wallpaper";
import Error404 from "./Error404";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />}></Route>

        <Route path={"colors"} element={<Colors />}></Route>
        <Route path={"colors/:color"} element={<Wallpaper />} />

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

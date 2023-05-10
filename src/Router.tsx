import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/tracking/:code" element={<Post />} />
      </Route>
    </Routes>
  );
}

  // { path: "/", lazy: async () => ({ Component: HomePage }) },
  // { path: "/tracking/:code", lazy: async () => ({ Component: TrackingPage }) },
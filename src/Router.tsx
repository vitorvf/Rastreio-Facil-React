import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Resultado } from "./pages/Resultado";
import { Historico } from "./pages/Historico";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tracking/:code" element={<Resultado />} />
        <Route path="/historico" element={<Historico />} />
      </Route>
    </Routes>
  );
}

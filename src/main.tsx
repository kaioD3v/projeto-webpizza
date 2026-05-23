import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Navbar from "./components/navbar/navbar";

import Home from "./pages/home/home";
import Historia from "./pages/historia/historia";
import Cardapio from "./pages/cardapio/cardapio";
import Reserva from "./pages/reserva/reserva";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/reserva" element={<Reserva />} />
    </Routes>
  </BrowserRouter>
);
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/home";
import Filmes from "./pages/filmes";
import Series from "./pages/series";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

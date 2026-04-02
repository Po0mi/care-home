import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Mainlayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutCarePage";
import JoinTeamPage from "./pages/JoinTeamPage";
import BookTourPage from "./pages/BookTourPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<JoinTeamPage />} />
          <Route path="/book-tour" element={<BookTourPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

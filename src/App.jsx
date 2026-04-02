import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Mainlayout";
import Home from "./pages/Home";
import AboutPage from "./pages/Aboutpage";
// import TestimonialsPage from "./pages/Testimonialspage";
// import OnlineCommunityPage from "./pages/OnlineCommunitypage";
// import BookTourPage from "./pages/BookTourpage";
// import JoinTeamPage from "./pages/JoinTeampage";
// import ContactPage from "./pages/Contactpage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
          {/* <Route path="/community" element={<OnlineCommunityPage />} /> */}
          {/* <Route path="/book-tour" element={<BookTourPage />} /> */}
          {/* <Route path="/join-team" element={<JoinTeamPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

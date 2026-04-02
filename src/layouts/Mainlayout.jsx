import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Mainlayout.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="layout_main">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

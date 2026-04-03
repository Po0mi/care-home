import Navbar from "./Navbar";
import Footer from "./Footer";
import MusicPlayer from "../components/MusicPlayer";
import Ambient from "../assets/ambient.mp3";
import "./Mainlayout.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="layout_main">{children}</main>
      <Footer />
      <MusicPlayer
        src={Ambient}
        title="Ambient Background"
        artist="Sycamore Cottage"
      />
    </>
  );
};

export default MainLayout;

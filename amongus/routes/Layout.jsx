import { Outlet, Link } from "react-router-dom";
import logo from "../public/amongUs.png"

const Layout = () => {
  return (
    <div>
      <div className="upperSection">
        <div className="logoSection">
          <img src={logo} height={100} />
          <Link id="mainTitle" to="/">Among Us</Link>
        </div>
        <div className="menuSection">
            <Link id="gallery" to="/CrewmateGallery/">Crewmate Gallery</Link>
            <Link id="create" to="/CreateCrewmate/">Create a Crewmate!</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout
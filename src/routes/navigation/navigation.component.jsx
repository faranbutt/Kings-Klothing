import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/crown.componet";
import './navigation.style.scss'
const NavBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={'/'}>
          <div>
            <CrownLogo />
          </div>
          </Link>
        
        <div className="nav-links-container">
          <Link className="nav-link" to={'/shop'}>SHOP</Link>
          <Link className="nav-link" to={'/auth'}>SIGN IN</Link>
        </div>

      </div>
      <Outlet />
    </>
  );
};

export default NavBar;

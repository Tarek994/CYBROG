import { Link } from "react-router-dom";


import logo  from "../../assets/images/logo.png"
import "./Header.css"
import NavItem, {NavItemDropDown} from "../../components/NavItem/NavItem"; 


const Header = () => {
    return (
      <div className="navbar navbar-expand-md navbar-dark cybrog-navbar">
      <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt=""/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
              <ul className="navbar-nav ms-auto">
                <NavItem>
                  <Link to="/" className="nav-link">Home</Link>
                </NavItem>  
                {/* {/* <NavItem>
                  <a href="/#" className="nav-link">Browse</a>
                  </NavItem>  
                  <NavItemDropDown>*/}
                  {/* <div className="nav-item dropdown">
                      <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                      <ul className="dropdown-menu">
                          <a href="/#" className="dropdown-item">Fortnite</a>
                          <a href="/#" className="dropdown-item">Call Of Duty</a>
                      </ul>
                  </div> 
                 
                  </NavItemDropDown>  */}

                  

                  <NavItem>
                  <Link to="/profile" className="nav-link">Profile </Link>
                  
                  </NavItem>

              </ul>
          </div>
      </div>
  </div>
    );
  }
  
  export default Header;
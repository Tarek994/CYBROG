
import logo  from "../../assets/images/logo.png"
import "./Header.css"
import NavItem, {NavItemDropDown} from "../../components/NavItem/NavItem"; 


const Header = () => {
    return (
      <div className="navbar navbar-expand-md navbar-dark cybrog-navbar">
      <div className="container">
          <a href="x" className="navbar-brand">
            <img src={logo} alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
              <ul className="navbar-nav ms-auto">
                <NavItem>
                  <a href="#hero" className="nav-link">Home</a>
                </NavItem>  
                <NavItem>
                  <a href="#features" className="nav-link">Browse</a>
                  </NavItem> 
                  <NavItemDropDown>
                  <div className="nav-item dropdown">
                      <a href="x" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                      <ul className="dropdown-menu">
                          <a href="#learn" className="dropdown-item">Fortnite</a>
                          <a href="#next" className="dropdown-item">Call Of Duty</a>
                      </ul>
                  </div>
                 
                  </NavItemDropDown> 

                  <NavItem>
                  <a href="#faq" className="nav-link">Streams</a>
                  </NavItem>

                  <NavItem>
                  <a href="./index-ar.html" className="nav-link">Profile</a>
                  </NavItem>

              </ul>
          </div>
      </div>
  </div>
    );
  }
  
  export default Header;
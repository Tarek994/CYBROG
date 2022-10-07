import "./Header.css"

const Header = () => {
    return (
      <div class="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
      <div class="container">
          <a href="#" class="navbar-brand">Bootstrap Tutorial</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mainmenu">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item"><a href="#hero" class="nav-link">Get Started</a></li>
                  <li class="nav-item"><a href="#features" class="nav-link">Features</a></li>
                  <li class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Learn</a>
                      <ul class="dropdown-menu">
                          <li><a href="#learn" class="dropdown-item">Learn Bootstrap</a></li>
                          <li><a href="#next" class="dropdown-item">Where to go next</a></li>
                      </ul>
                  </li>
                  <li class="nav-item"><a href="#faq" class="nav-link">Ask Me</a></li>
                  <li class="nav-item"><a href="./index-ar.html" class="nav-link">عربي</a></li>
              </ul>
          </div>
      </div>
  </div>
    );
  }
  
  export default Header;
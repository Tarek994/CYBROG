import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Container} from "./components/index";
import { Header, Footer } from "./sections/index";
import {Home, Profile} from "./Pages/index"


const App = () => {
  return (
    <>
      <Router>
            <Header/>
            <Container>
            <Routes>
              <Route exact path="/CYBROG" element={<Home/>}/>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>

            </Routes>
            </Container>
          <Footer/>
      </Router>
    

    </>
  );
}

export default App;

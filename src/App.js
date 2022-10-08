import "./App.css"
import { Container} from "./components/index";
import { Header, Footer, Hero  } from "./sectios/index";


const App = () => {
  return (
    <>
      <Header/>
      <Container>
        <Hero/>

      </Container>
      {/* <Footer/> */}
    

    </>
  );
}

export default App;

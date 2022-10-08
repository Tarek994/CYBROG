import "./App.css"
import { Container} from "./components/index";
import { Header, Footer, MostPopular ,Hero } from "./sectios/index";


const App = () => {
  return (
    <>
      <Header/>
      <Container>
        <Hero/>
        <MostPopular/>

      </Container>
      {/* <Footer/> */}
    

    </>
  );
}

export default App;

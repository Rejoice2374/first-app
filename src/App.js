import "./App.css";
import Test from "./Component/Test";
import Intro from "./Component/Intro";
import Intro2 from "./Component/Intro2";
import Menu from "./Component/Menu";
import Counter from "./Component/Counter";
import ColorSchemesExample from "./Component/Navbar";
import Footer from "./Component/Footer";
import Order from "./Component/Order";
// import AboutProps from "./Component/AboutProps";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      {/* <AboutProps name="Kate Peters" dept="HR" location="Lagos">
        <h1>Staff of XYZ Company</h1>
        <p>Modified</p>
      </AboutProps>
      <AboutProps name="John Smith" dept="Admin" location="Lagos" /> */}
      <Container>
        <Router>
          <Routes>
            <Route path="/" exact element={<Menu />} />
            <Route path="/Intro" exact element={<Intro />} />
            <Route path="/Intro2" exact element={<Intro2 />} />
            <Route path="/Test" exact element={<Test />} />
            <Route path="/Counter" exact element={<Counter />} />
            <Route path="/Order" exact element={<Order />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

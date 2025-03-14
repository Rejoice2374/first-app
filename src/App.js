import "./App.css";
import Test from "./Component/Test";
import Intro from "./Component/Intro";
import Intro2 from "./Component/Intro2";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Intro />} />
          <Route path="/Intro2" exact element={<Intro2 />} />
          <Route path="/Test" exact element={<Test />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

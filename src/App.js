import "./App.css";
import Test from "./Component/Test";
import Intro from "./Component/Intro";
import Intro2 from "./Component/Intro2";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Intro />} />
          <Route path="/Intro2" exact element={<Intro2 />} />
          <Route path="/Test" exact element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

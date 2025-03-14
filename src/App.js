import "./App.css";
import Test from "./Test";
import Intro from "./Component/Intro";
import Intro2 from "./Component/intro2";
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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./router/Detail";
import Home from "./router/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<Detail />}/>
      </Routes>
    </Router>
  );
}

export default App;

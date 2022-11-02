import { Route, Routes } from "react-router-dom";
import "./App.css";
import AlYousser from "./component/AlYousser";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/AlYousser" element={<AlYousser />}></Route>
        <Route path="/Motherhood" element={<AlYousser />}></Route>
        <Route path="/Training" element={<AlYousser />}></Route>
      </Routes>
    </div>
  );
}

export default App;

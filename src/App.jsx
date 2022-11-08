import { Route, Routes } from "react-router-dom";
import "./App.css";
import GroupDetails from "./components/GroupDetails/GroupDetails";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="container">
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/whatsapp" element ={<GroupDetails/>} />
      </Routes>
    </div>
  );
}

export default App;

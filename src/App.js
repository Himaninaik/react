import natureimage from "./nature.jpeg";
import Home from "./component/Home";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import About from  "./component/About";
import Skill from "./component/Skill";
import Contact from "./component/Contact";

import Certification from "./component/Certification";
import Qualification from "./component/Qualification";
import Education from "./component/Education";

function App() {
  return (
    <div className="Navbar">
      <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skill' element={<Skill />}/>
        <Route path='/contact' element={< Contact/>}/>
        <Route path='/certification' element={< Certification/>}/>
        <Route path='/Education' element={< Education/>}/>
        <Route path='/Qualification' element={< Qualification/>}/>
       
      </Routes>
      </BrowserRouter>
      {/* <div className="About">
        <About/>
      </div>
      <div className="Skill">
        <Skill/>
      </div>
      <img src={natureimage} alt="virat" /> */}
      
    </div>
  );
}
export default App;

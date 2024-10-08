import natureimage from "./nature.jpeg";
import Home from "./component/Home";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import About from  "./component/About";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Certification from "./component/Certification";
// import Qualification from "./component/Qualification";
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
        <Route path='/certification' element={< Certification/>}/>
        <Route path='/Education' element={< Education/>}/>
        {/* <Route path='/Qualification' element={< Qualification/>}/> */}
        <Route path='/contact' element={< Contact/>}/>
       
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}
export default App;

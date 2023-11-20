import First from "./My";
import Skill from "./Skill";
import About from  "./About";
import Contact from "./Contact";
import "../css/Home.css";
import My from "./My";
import Certification from "./Certification";
import Qualification from "./Qualification";
import Footer from "./Footer";
function Home(){
    return(
        <>
      <My/>
      <About/>
      <Skill/>
<Contact/>
<Certification/>
<Qualification/>
<Footer/>
<div className="bar"></div>
      </>
    );
}

export default Home;
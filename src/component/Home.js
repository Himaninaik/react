import First from "./My";
import Skill from "./Skill";
import About from  "./About";

import "../css/Home.css";
import My from "./My";
import Certification from "./Certification";
// import Qualification from "./Qualification";
import Education from "./Education";

import Contact from "./Contact";
import Footer from "./Footer";
function Home(){
    return(
        <>
      <My/>
      <About/>
      <Skill/>

<Certification/>
{/* <Qualification/> */}
<Education/>

<Contact/>
{/* <Footer/> */}

      </>
    );
}

export default Home;
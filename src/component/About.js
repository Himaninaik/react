import myimage from "../image/mys.jpg";
import "../css/About.css";
function About() {
  return (
    <>
<br></br><br></br>
        <h1><u><big>ABOUT ME:</big></u></h1>
        <br></br>
       
        
        <div className="photo">
        
        <img src={myimage} alt="hmm" /> 
        </div>

       
        <div className="info">
         {/* <br></br><br></br>  */}
        <h2>Its himani Naik....</h2>
          <p><strong>Iam Himani Naik .currently iam persuing my Engineering at Canara Engineering College Manglore.iam Computer science student .my goal is to become devloper.my tsrengths is my ability to work in a team </strong></p>
          </div>  
          
      
    </>
  );
}
export default About;

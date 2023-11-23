import myimage from "../image/mys.jpg";
import "../css/About.css";
function About() {
  return (
    <>
{/* <br></br><br></br> */}
<h1><u><big>ABOUT ME:</big></u></h1>
<div className="main">
<div className="photo">
        
        <img src={myimage} alt="hmm" /> 
        </div>
  <div className="info">
        
        <h2>Its himani Naik....</h2>
          <p><strong>Iam Himani Naik .currently iam persuing my Engineering at Canara Engineering College Manglore.iam Computer science student .my goal is to become devloper.my strength is my ability to work in a team .i have the leadership quality i can manage everything without fear. </strong></p>
          </div>  
        
       
        
        
        </div>
       
       
           
          
         
    </>
  );
}
export default About;

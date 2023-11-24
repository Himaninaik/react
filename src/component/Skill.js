import svgicon from "../image/htm.png";
import svgcss from "../image/csss.png";
import svgjava from "../image/javas.png";
import svgpythoon from "../image/pythoonn.png";
import "../css/Skill.css";
function Skill(){
    return(
        <>
        <br></br>
        {/* div className="skill1" */}
        <div className="Skill">
        <div className="skill1">
            
            <h1><u>Skills:</u></h1>
            <div className="image">
            <img className="images" src={svgicon} alt="Htm" />
            <img className="images"src={svgcss} alt="csss" />
            <img className="images"src={svgjava} alt="jvas" />
            <img className="images"src={svgpythoon} alt="pyt" />
            {/* <Footer/> */}
        </div>
        </div>
        </div>
        </>
    );
}
export default Skill;
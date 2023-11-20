import svgicon from "../image/htm.png";
import svgcss from "../image/csss.png";
import svgjava from "../image/javas.png";
import svgpythoon from "../image/pythoonn.png";
import "../css/Skill.css";
function Skill(){
    return(
        <>
        <br></br><br></br><br></br><br></br><br></br>
        <div className="Skill">
            <h1><u>Skills:</u></h1>

            
            <div className="image">
            <img src={svgicon} alt="Htm" />
            <img src={svgcss} alt="csss" />
            <img src={svgjava} alt="jvas" />
            <img src={svgpythoon} alt="pyt" />
        </div>
        </div>
        </>
    );
}
export default Skill;
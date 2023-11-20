import image from "../image/code.jpg";
import im from "../image/html.jpg";
import img from "../image/java.jpg";
import imm from "../image/python.jpg";
import "../css/Certification.css";
function Certification(){
    return(
        <>
        <br/>
        <div className="cert">
            <h1><u>Certification</u></h1>

            
            <div className="certi">
            <img src={image} alt="code" />
            <img src={im} alt="html" />
            <img src={img} alt="jva" />
            <img src={imm} alt="pyth" />
        </div>
        </div>
        </>
    );
}
export default Certification;
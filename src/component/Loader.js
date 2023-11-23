import react from "react";
import imags from "../image/loader.gif";
function Loader(){
    return(
        <>
        <div className="gif">
        <img src={imags} alt="gifs" />
        </div>
        </>
    );
}
export default Loader;
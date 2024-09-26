import React, { useEffect,useState } from "react";
import "../css/Navbar.css";
import svgicon from "../image/hamburger.png";
import { Link ,useLocation} from "react-router-dom";


function Navbar() {
  const [navbar, setNavbar] = useState(false);

 const location= useLocation();
  const[loc,setLoc]=useState("/");
  useEffect(() =>{
    setLoc(location.pathname);

    },[location]);
   /* useState(()=>{
      location.pathname
    }
  },[location])*/

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="Navbar">
      <div className="desktop">
        <ul>
          <li>
            {

            
          loc==='/'?
          ""
          :
            <Link to='/' className="active" >Home</Link>
            }
            
          </li>
          <li>

           

        {
            
         loc==='/About'?
          ""
          :
              <Link to='/About'>About</Link>
            }
          
          </li>
          <li>
            {

            loc==='/Skill'?
            ""
            :
          <Link to='/Skill' >Skill</Link>
            }
          </li>
          <li>
          {

loc==='/Cerification'?
""
:
          <Link to='/certification' >Certification</Link>
}
          </li>
          <li>
            {
                  loc==='/Contact'?
                  ""
                  :
            
          <Link to='/Contact' >Contact</Link>
            }
          </li>
          {/* <li>
            {
                  loc==='/Qualification'?
                  ""
                  :
            
          <Link to='/Qualification' >Qualification</Link>
            }
          </li> */}
          <li>
            {

            loc==='/Education'?
            ""
            :
          <Link to='/Education' >Education</Link>
            }
          </li>
          </ul>
          </div>
          <div className="Hamburger">
        <span className="icon" onClick={toggleNavbar}>
          <img src={svgicon} alt="Hamburger Icon" />
        </span>
      </div>
        
        
     

    

      {navbar && (
        <div id="sidebar" className="sidebar">
          <span className="close" onClick={toggleNavbar}>
          <span className="closebtn" onClick={toggleNavbar}>
            &times;
          </span>
          {

loc==='/'?
""
:
          <Link to='/' className="active" >Home</Link>
}
{
loc==='/About'?
""
:

          <Link to='/About'>About</Link>
}
{
loc==='/Skill'?
""
:

          <Link to='/Skill'>Skill</Link>
}
{

loc==='/certification'?
          ""
          :
          <Link to='/certification'>Certification</Link>
}
{
  loc==='/contact'?
  ""
  :
          <Link to='/contact'>Contact</Link>
}
{/* {
                  loc==='/Qualification'?
                  ""
                  :
            
          <Link to='/Qualification' >Qualification</Link>
            } */}
            {

          
 loc==='/Education'?
                  ""
                  :
            
          <Link to='/Education' >Education</Link>
            }
          </span>
        </div>
      )}
    </div>
  );
}

export default Navbar;
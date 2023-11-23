// import Card from "./Card";
// import "../css/Education.css";
// import "../css/Card.css";
// function Education(){
//     const EducationP=[
//             {
//                 id:1,
//                 H:"professional Degree",
//                 P:"I am currently studing Engineering in Computer science stream at canara engineering college",
//                 img:"htm"

//             },
//             {
//                 id:2,
//                 H:"PUC",
//                 P:"I Completed PUC in SDM College at Honnavar,Uttar Kannada",
                
//             },
//             {
//                 id:3,
//                 H:"School",
//                 P:"I completed my school in Shree Bharathi School at Kavalakki,honnvar(uttar kannada",
                
//             }
        

//     ]
//     return(
//         <>
//          <div className="education">
//              <h1>Education</h1>
//          {/* </div>
//       <div className="container">
//         <div className="box1"></div>
//          <div className="box2">right Div Content</div>
//           <div className="box3">third Div Content</div> */}
        
//         <div className="container">
//             {
//                 EducationP.map((item)=>(
//                     <Card Education={item}/>
//                 ))
                
                
                
                
                
//             }
//         </div>
//         </div>
//         </>
//     );

//         }
// //     return(
// //         <>
// //         <div className="education">
// //             <h1>Education</h1>
// //         </div>
// //         <div className="container">
// //          <div className="box1">left Div Content</div>
// //          <div className="box2">right Div Content</div>
// //          <div className="box3">third Div Content</div>
// //          </div>
// //         </>
// //     );
// // }
// export default Education;
import "../css/Education.css";
import Card from "./Card";
function Education() {
  const Education1 = [
    {
      id: 1,
      h: "Degree",
      p: "I am currently studing ENGINEERING in Computer Science and Engineering at Canara Engineering College.",
      i:"grad"
    },
    {
      id: 2,
      h: "PUC",
      p: "I completed my PUC in SDM PU College,HONNAVAR,Uttara Kannada",
      i:"grad"
    },
    {
      id: 3,
      h: "High School",
      p: "I completed my High School in Shree Bharati High School,kavalakki,Uttara Kannada",
      i:"grad"
    },
  ];
  return (
    <>
    <h1><u>Education</u></h1>
    
      {/* <div id="education">
        
      </div>
      <div className="pd">
        <div id="primary">
          
          <p>
            My name is Disha.I am currently pursuing BE in Canara Engineering
            College,Benjanapadavu.I completed my PUC Saraswati pU
            College,Kumta.And I completed my High School in CVSK High
            School,Kumta.
          </p>
        </div>
        <div id="highschool">
          
          <p>
            My name is Disha.I am currently pursuing BE in Canara Engineering
            College,Benjanapadavu.I completed my PUC Saraswati pU
            College,Kumta.And I completed my High School in CVSK High
            School,Kumta.
          </p>
        </div>
        <div id="puc">
         
          <p>
            My name is Disha.I am currently pursuing BE in Canara Engineering
            College,Benjanapadavu.I completed my PUC Saraswati pU
            College,Kumta.And I completed my High School in CVSK High
            School,Kumta.
          </p>
        </div>
      </div> */}
      <div className="container2">
      {Education1.map((item) => (
        <Card Education1={item} />
      ))}
      </div>
    </>
  );
}
export default Education;
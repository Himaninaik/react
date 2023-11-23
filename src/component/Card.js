// import htm from "../image/school.gif";
// import "../css/Card.css";
// function Card({Education}){
//     console.log(Education)
//     const imgval=(value)=>{
//         if(value==="htm")
//         return htm;
//     }

//     return(
//         <>
//         <div className="card">
//        <div className="ed">
// <h1>{Education.H}</h1>
// </div>
// <p>{Education.P}</p>

// <img src={imgval(Education.img)}/>
//         </div>
        
        
//         </>
//     );
// }
// export default Card;
import "../css/Card.css";
import grad from "../image/student.gif"
// import css from "../icons/css.svg"
function Card({Education1}) {
  
  {
  const imgf =(value) => {
    if(value ==='grad'){
      return grad;

    // else{
    //   return css;
    // }
  }}
  console.log(Education1.h);
  return (
    <>
      <div className="card">
       <div class="ed"> <h2>{Education1.h}</h2></div>
        <p>{Education1.p}</p>
        <div className="imgs">
      <img src={imgf(Education1.i)} />
      </div>
      </div>
    </>
  );
}}
export default Card;
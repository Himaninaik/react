
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
  <div className="card-list">
      <div className="card">
       <div class="ed">
         <h2>{Education1.h}</h2></div>
        <p>{Education1.p}</p>
        <div className="imgs">
      <img src={imgf(Education1.i)} />
      </div>
      </div>
    </div>
  );
}}
export default Card;
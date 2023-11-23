
// import "../css/Education.css";
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
    
      
      <div className="container2">
      {Education1.map((item) => (
        <Card Education1={item} />
      ))}
      </div>
    </>
  );
}
export default Education;
import { useState } from "react";
import BAButton from "../component/BAButton";
import Result from "./Result";

const Quizscreen = () => {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const [marks, setMarks] = useState<any>(0);
  const [final, setFinal] = useState<any>(false);
  // const [display, setDisplay] = useState<string>('d-block');

  let questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];
let percentage = (marks/questions.length)*100;
const clickResult = ()=>{
  setCurrentIndex (0);
  setMarks(0);
  setFinal(false)
  console.log('i am working')

}
  return (
    <>{final == true?
      <Result className = 'd-non' number={marks} outof={questions.length} percentage={percentage} status='pass' clicking={clickResult}/>
    
    :
      
      (<div className="bg-primay">
        <div className={`container mt-5`}>
          <div className="border shadow rounded row justify-content-center ">
            <div className=" col-lg-8 my-5 border shadow rounded">
              <div className="border-bottom">Awesome Quiz App</div>

              <div>
                Questions : {currentIndex + 1}/{questions.length}
              </div>
              <p>
                Score : {marks}/{questions.length}
              </p>
              <p>Percentage : {percentage} %</p>
              <div className="display-5 py-5">
                {" "}
                <span>{questions[currentIndex].question}</span>
              </div>
              <div className="row justify-content-center">
                {questions[currentIndex].options.map((a: any, i) => (
                  <div className="col-12 col-sm-10 col-md-5 col-lg-5 p-3 ">
                    <button
                      className="bg-primary text-center btn w-100"
                      value={a}
                      onClick={() => {
                        let newIndex = currentIndex + 1;
                        if (newIndex < questions.length) {
                          setCurrentIndex(newIndex);
                          console.log(currentIndex);
                          console.log(newIndex);
                        }
                        if (a == questions[currentIndex].correctAns) {
                          // if (marks < questions.length) {
                            setMarks(marks + 1);
                          // }
                        }
                        if (newIndex < questions.length) {
                          setCurrentIndex(newIndex);
                          console.log(newIndex)
                        } else {
                          // setDisplay('d-none');
                          setFinal(true)
                          console.log(newIndex)
                          console.log(currentIndex)
                        }
                      }}
                    >
                      {a}
                    </button>
                  </div>
                ))}

              
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default Quizscreen;

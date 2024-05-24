import { useState } from "react";
import BAButton from "../component/BAButton";

const QuizScreen = () => {
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
  const [currentIndex, setCurrentIndex] = useState<any>(0);

  return (
    <>
      <div className="bg-primay">
        <div className="container">
          <div className="border shadow rounded row ">
            <div className=" col-lg-8">
              <div className="border-bottom">Awesome Quiz App</div>

              <div>
                Questions {currentIndex+1}/{questions.length}
              </div>
              <div className="display-5 py-5">
                {" "}
                <span>{questions[currentIndex].question}</span>
              </div>
              <div className="row justify-content-center">
                {questions[currentIndex].options.map((a: any, i) => (
                
                    <div className="col-12 col-sm-10 col-md-5 col-lg-5 p-3">
                        <button   className="bg-primary text-center btn" onClick={(a)=>{
                            setCurrentIndex(currentIndex+1);
                            console.log(a.target)
                        }}>{a}</button>
                      
                    </div>
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default QuizScreen;

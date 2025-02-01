import React, { useState, useEffect } from "react";
import { db, collection, addDoc, getDocs, query, orderBy, limit } from "./firebase";
import "./QuizGame.css";

const adjectives = ["Brave", "Clever", "Swift", "Mighty", "Fierce", "Wise", "Bold", "Sneaky"];
const nouns = ["Coder", "Hacker", "Developer", "Engineer", "Debugger", "Architect", "Gamer"];

const questions = [
  { question: "What is my favorite programming language?", options: ["Python", "C++", "JavaScript", "Go"], answer: "C++" },
  { question: "Which AI concept interests me the most?", options: ["Computer Vision", "NLP", "Reinforcement Learning", "Compilers"], answer: "Compilers" },
  { question: "Which superhero do I like?", options: ["Batman", "Superman", "Spiderman", "Iron Man"], answer: "Batman" }
];

function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState("");
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const q = query(collection(db, "leaderboard"), orderBy("score", "desc"), limit(5));
      const querySnapshot = await getDocs(q);
      setLeaderboard(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchLeaderboard();
  }, [showScore]);

  const generateRandomName = () => {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const timestamp = Date.now().toString().slice(-4);
    return `${adjective} ${noun} ${timestamp}`;
  };

  const handleAnswer = async (selectedOption) => {
    setSelectedAnswer(selectedOption);

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("incorrect");
    }

    setTimeout(async () => {
      setSelectedAnswer(null);
      setAnswerStatus("");

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
        const randomName = generateRandomName();
        setPlayerName(randomName);
        await addDoc(collection(db, "leaderboard"), { name: randomName, score });
      }
    }, 1000);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Nice try, {playerName}! You scored {score} out of {questions.length}!</h2>
          <button onClick={() => {
            setCurrentQuestion(0);
            setScore(0);
            setShowScore(false);
          }}>Play Again</button>

          <h3>🏆 Leaderboard</h3>
          <ul>
            {leaderboard.map((entry, index) => (
              <li key={index}>{entry.name}: {entry.score} points</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                className={`quiz-option ${selectedAnswer === option ? answerStatus : ""}`} 
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizGame;

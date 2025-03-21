import React, { useState, useEffect } from "react";
import { Info, Award, Clock, CheckCircle2 } from "lucide-react";

const quizData = [
  {
    question_id: 101,
    category: "Current Affairs",
    difficulty: "Medium",
    question_text: "Which country recently hosted the G20 summit in 2024?",
    options: [
      { option_id: 1, option_text: "India", is_correct: false },
      { option_id: 2, option_text: "Saudi Arabia", is_correct: false },
      { option_id: 3, option_text: "Indonesia", is_correct: true },
      { option_id: 4, option_text: "Brazil", is_correct: false },
    ],
    explanation:
      "Indonesia hosted the G20 summit in 2024, marking its first time as the summit's host.",
    points: 10,
  },
  {
    question_id: 102,
    category: "Technology",
    difficulty: "Hard",
    question_text: "Which AI model was released by Anthropic in 2024?",
    options: [
      { option_id: 1, option_text: "Claude 3.5 Sonnet", is_correct: true },
      { option_id: 2, option_text: "GPT-5", is_correct: false },
      { option_id: 3, option_text: "Gemini Ultra", is_correct: false },
      { option_id: 4, option_text: "PaLM 3", is_correct: false },
    ],
    explanation:
      "Claude 3.5 Sonnet was released by Anthropic in 2024, known for its advanced capabilities.",
    points: 15,
  },
  {
    question_id: 103,
    category: "Science",
    difficulty: "Medium",
    question_text:
      "What major breakthrough in renewable energy occurred in 2024?",
    options: [
      {
        option_id: 1,
        option_text: "Fusion Energy Breakthrough",
        is_correct: true,
      },
      {
        option_id: 2,
        option_text: "Solar Panel Efficiency Record",
        is_correct: false,
      },
      {
        option_id: 3,
        option_text: "Hydrogen Fuel Commercialization",
        is_correct: false,
      },
      {
        option_id: 4,
        option_text: "Wind Turbine Innovation",
        is_correct: false,
      },
    ],
    explanation:
      "A significant fusion energy breakthrough was achieved, bringing us closer to sustainable energy production.",
    points: 12,
  },
];

const ModernQuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); 

  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      !quizCompleted &&
      setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    if (timeLeft === 0) setQuizCompleted(true);
    return () => clearTimeout(timer);
  }, [timeLeft, quizCompleted]);

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const proceedToNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateFinalScore();
      setQuizCompleted(true);
    }
  };

  const calculateFinalScore = () => {
    const finalScore = quizData.reduce((total, question) => {
      const selectedOptionId = selectedOptions[question.question_id];
      const correctOption = question.options.find((opt) => opt.is_correct);

      return selectedOptionId === correctOption.option_id
        ? total + question.points
        : total;
    }, 0);

    setScore(finalScore);
  };

  const renderQuizContent = () => {
    if (quizCompleted) {
      const totalPossibleScore = quizData.reduce(
        (total, q) => total + q.points,
        0
      );
      const percentageScore = Math.round((score / totalPossibleScore) * 100);

      return (
        <div className="text-center space-y-6">
          <Award className="mx-auto text-yellow-500 size-24" />
          <h2 className="text-3xl font-bold text-gray-800">Quiz Completed!</h2>
          <div className="bg-white/30 backdrop-blur-lg p-6 rounded-2xl">
            <p className="text-xl">Your Score</p>
            <p className="text-4xl font-extrabold text-purple-600">
              {score} / {totalPossibleScore}
            </p>
            <p className="text-lg mt-2">{percentageScore}% Accuracy</p>
          </div>
          <div className="space-y-4">
            {quizData.map((question, index) => {
              const selectedOptionId = selectedOptions[question.question_id];
              const correctOption = question.options.find(
                (opt) => opt.is_correct
              );
              const isCorrect = selectedOptionId === correctOption.option_id;

              return (
                <div
                  key={question.question_id}
                  className={`p-4 rounded-lg ${
                    isCorrect ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <p className="font-semibold">{question.question_text}</p>
                  <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                    {isCorrect ? "Correct" : "Incorrect"}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {question.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    const currentQuestion = quizData[currentQuestionIndex];
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="text-purple-500" />
            <span className="font-semibold">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {quizData.length}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          {currentQuestion.question_text}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.option_id}
              onClick={() =>
                handleOptionSelect(
                  currentQuestion.question_id,
                  option.option_id
                )
              }
              className={`w-full p-3 text-left rounded-lg transition-all duration-300 
                ${
                  selectedOptions[currentQuestion.question_id] ===
                  option.option_id
                    ? "bg-purple-100 border-2 border-purple-500"
                    : "bg-white/50 hover:bg-purple-50 border border-transparent"
                }`}
            >
              {option.option_text}
            </button>
          ))}
        </div>

        <button
          onClick={proceedToNextQuestion}
          disabled={!selectedOptions[currentQuestion.question_id]}
          className="mt-6 w-full py-3 bg-purple-500 text-white rounded-lg 
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-purple-600 transition-colors"
        >
          {currentQuestionIndex === quizData.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6">
        {renderQuizContent()}
      </div>
    </div>
  );
};

export default ModernQuizComponent;

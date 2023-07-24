import React, { useEffect, useState } from 'react';

const Quizz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=20&type=multiple');
        const data = await response.json();
        if (data.response_code === 0) {
          setQuestions(data.results);
          setUserAnswers(new Array(data.results.length).fill(null));
        } else {
          console.error('La requête n\'a pas abouti. Veuillez réessayer plus tard.');
        }
      } catch (error) {
        console.error('Une erreur s\'est produite:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = selectedAnswer;
      return updatedAnswers;
    });

    if (questionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (questions.length === 0) {
    return <div>Chargement...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const allAnswers = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).sort(() => Math.random() - 0.5);

  return (
    <div>
      <p>{currentQuestionIndex + 1}. {currentQuestion.question}</p>
      {allAnswers.map((answer, answerIndex) => (
        <div key={answerIndex}>
          <input
            type="radio"
            name={`q${currentQuestionIndex}`}
            value={answer}
            checked={userAnswers[currentQuestionIndex] === answer}
            onChange={() => handleAnswerSelect(currentQuestionIndex, answer)}
          />
          <label htmlFor={`q${currentQuestionIndex}`}>{answer}</label>
        </div>
      ))}
    </div>
  );
};

export default Quizz;

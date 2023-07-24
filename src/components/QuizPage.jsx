import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizPage = ({ difficulty, theme }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Appel à l'API pour obtenir les questions du quiz en fonction de la difficulté et du thème
    const fetchQuestions = async () => {
      try {
        const apiUrl = `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${difficulty}&category=${theme}`;
        const response = await axios.get(apiUrl);
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Erreur lors de la récupération des questions du quiz:', error);
      }
    };

    if (difficulty && theme) {
      fetchQuestions();
    }
  }, [difficulty, theme]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  if (!difficulty || !theme) {
    return <p>Veuillez sélectionner une difficulté et un thème pour démarrer le quiz.</p>;
  }

  if (questions.length === 0) {
    return <p>Chargement des questions...</p>;
  }

  if (currentQuestionIndex >= questions.length) {
    return <p>Fin du quiz</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>Quiz</h1>
      <p>Question {currentQuestionIndex + 1} :</p>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.incorrect_answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
        <li key="correct">{currentQuestion.correct_answer}</li>
      </ul>
      <button onClick={handleNextQuestion}>Question suivante</button>
    </div>
  );
};

export default QuizPage;

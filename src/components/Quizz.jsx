import React, { useEffect, useState } from 'react';
import './Quizz.css'
import he from 'he'

const Quizz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

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
    if (questionIndex === currentQuestionIndex) {
      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[questionIndex] = selectedAnswer;
        return updatedAnswers;
      });

      if (currentQuestionIndex === questions.length - 1) {
        // Dernière question, marquer le quiz comme terminé
        setQuizCompleted(true);
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const showQuizResult = () => {
    // Afficher le résultat du quiz ici
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correct_answer) {
        score++;
      }
    }
    console.log('Réponses de l\'utilisateur :', userAnswers);
    console.log('Score :', score);
  };

  if (questions.length === 0) {
    return <div>Chargement...</div>;
  }

  if (!quizCompleted) {
    const currentQuestion = questions[currentQuestionIndex];
    const allAnswers = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).sort(() => Math.random() - 0.5);

    return (
      <div>
        <p>{currentQuestionIndex + 1}. {currentQuestion.question}</p>
        {allAnswers.map((answer, answerIndex) => (
          <div key={answerIndex} onClick={() => handleAnswerSelect(currentQuestionIndex, answer)}>
            <input
            className=''
              type="radio"
              name={`q${currentQuestionIndex}`}
              value={answer}
              checked={userAnswers[currentQuestionIndex] === answer}
              onChange={() => {}} // Cette fonction est nécessaire pour éviter un avertissement lié aux boutons radio
            />
            <label className="answer-label" htmlFor={`q${currentQuestionIndex}`}>{answer}</label>
          </div>
        ))}
      </div>
    );
  } else {
    showQuizResult();
    return (
      <div class="conteneurResultat">
        <h2>Résultat du quizz</h2>
        {questions.map((question, index) => (
          <div class="blocQuestionResultat" key={index}>
            <p>{index + 1}. {question.question}</p>
            <p class="repSaisie">Réponse saisie : {userAnswers[index]}</p>
            {userAnswers[index] === question.correct_answer ? (
              <p class="correctionQuestion">Correct !</p>
            ) : (
              <p>Incorrect. La réponse correcte était : {question.correct_answer}</p>
            )}
          </div>
        ))}
      </div>
    );
  }
};

export default Quizz;

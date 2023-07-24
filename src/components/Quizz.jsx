import React, { useEffect, useState } from 'react';

const Quizz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=20&type=multiple');
        const data = await response.json();
        if (data.response_code === 0) {
          setQuestions(data.results);
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
    // Vous pouvez implémenter ici la logique pour traiter la réponse sélectionnée
    console.log(`Question ${questionIndex + 1}, réponse sélectionnée: ${selectedAnswer}`);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{index + 1}. {question.question}</p>
          {question.incorrect_answers.concat(question.correct_answer).sort(() => Math.random() - 0.5).map((answer, answerIndex) => (
            <div key={answerIndex}>
              <input
                type="radio"
                name={`q${index}`}
                value={answer}
                onChange={() => handleAnswerSelect(index, answer)}
              />
              <label htmlFor={`q${index}`}>{answer}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Quizz;

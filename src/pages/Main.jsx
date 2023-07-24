import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const Main = (props) => {
  const [categories, setCategories] = useState([]);
  const [difficulties, setDifficulties] = useState([]);

  // const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => {
        setCategories(data.trivia_categories);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des catégories:', error);
      });

    setDifficulties(['easy', 'medium', 'hard']);
  }, []);

  const handleCategoryChange = (event) => {
    props.setSelectedCategory(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    props.setSelectedDifficulty(event.target.value);
  };

  const handleStartQuiz = () => {
    if (!props.selectedCategory || !props.selectedDifficulty) {
      alert('Veuillez sélectionner une catégorie et un niveau de difficulté.');
      return;
    }

    const apiUrl = `https://opentdb.com/api.php?amount=10&category=${props.selectedCategory}&difficulty=${props.selectedDifficulty}&type=multiple`;

    // Vous pouvez maintenant rediriger l'utilisateur vers la page du quiz et passer les questions récupérées en tant que paramètres si nécessaire
    // Par exemple : history.push('/quiz', { questions: fetchedQuestions });
  };

  return (
    <div>
      <h1>Knowledge Challenge</h1><br /><br />
      <label>
        1. 
        <select value={props.selectedCategory} onChange={handleCategoryChange}>
          <option value="" width="200px">Sélectionner une catégorie</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </label>
      <br /><br />
      <label>
        2. 
        <select value={props.selectedDifficulty} onChange={handleDifficultyChange}>
          <option value="" width="200px">Sélectionner une difficulté</option>
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </label>
      <br/><br/><br/>
      <Link to="/CountDown">
        <button onClick={handleStartQuiz}>Démarrer le quiz</button>
      </Link>
    </div>
  );
};

Main.propTypes = {
  selectedCategory: PropTypes.string,
  selectedDifficulty: PropTypes.string
};

export default Main;

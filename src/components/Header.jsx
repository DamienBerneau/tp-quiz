import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

function Header(props) {
  return (
    <>
      <Link className='alert alert-danger' to="/Main"><button>Quizz</button></Link>

      <h1>Bonjour {props.user}, bienvenue !</h1>
    </>
  );
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Header
import React from 'react'




function Header(props) {
  return (
    <h1 className="alert alert-warning">Bonjour {props.user}, bienvenue !</h1>
  )
}

export default Header
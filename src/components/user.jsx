import React, { useState } from 'react'

function User() {
    const [user, setUser] = useState('')

    const onClickChange = () => {
        const inputValue = document.querySelector('input').value;
        setUser(inputValue)
    };

    return (
        <div><input type="text" placeholder='votre nom'
           
        /><button className='btn btn-primary' onClick={onClickChange}>Valider</button>
        <p>Utilisateur : {user}</p></div>
    )
}

export default User
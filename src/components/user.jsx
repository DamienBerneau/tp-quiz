import React, { useState } from 'react'

function User(props) {

    const [localUser, setLocalUser] = useState('')


    const onClick = () => {
        props.setUser(localUser)
    };

    const onChange = (event) => {
        setLocalUser(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder='votre nom' value={localUser} onChange={onChange}

            />
            <button className='btn btn-primary' onClick={onClick}>Valider</button>
            <p>Utilisateur : {props.user}</p>
        </div>
    )
}

export default User
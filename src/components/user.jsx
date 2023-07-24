import React, { useState } from 'react'

function User(props) {

    const [localUser, setLocalUser] = useState('')
    const [isButtonClicked, setIsButtonClicked] = useState(false);


    const onClick = () => {
        props.setUser(localUser)
        setIsButtonClicked(true);
    };
    const onKey = (event) => {
        if (event.key === "Enter") onClick();
    }

    const onChange = (event) => {
        setLocalUser(event.target.value)
    }

    return (
        <div>
            {isButtonClicked ? null : ( // Si isButtonClicked est true, masquer l'input et le bouton.
                <div>
                    <input type="text" placeholder='votre nom' value={localUser} onChange={onChange} onKeyPress={onKey}/>
                    <button className='btn btn-primary' onClick={onClick} >Valider</button>
                </div>
            )}
        </div>
    )
}

export default User
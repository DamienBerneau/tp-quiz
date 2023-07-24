import React, { useState } from 'react'

function user() {
    const [user, setUser] = useState('')

    const handleInputChange = (event) => {
        setUser(event.target.value);
    };

    return (
        <div><input type="text" placeholder='votre nom'
            value={user}
            onChange={handleInputChange} /><button className='btn btn-primary'>Valider</button></div>
    )
}

export default user
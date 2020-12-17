import React from 'react'

function Welcome({handleLogout}) {
    return (
        <div>
           <nav>
            <h2>WELCOME!!!</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>
        </div>
    )
}

export default Welcome

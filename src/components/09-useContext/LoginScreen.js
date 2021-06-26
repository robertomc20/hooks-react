import React, { useContext } from 'react';
import { UserContext } from './UserContext';


export const LoginScreen = () => {

    // Tareas
    // Obtener referencias al context (userContext)
    // extraer setUser del context
    const { setUser } = useContext(UserContext);

    
    const user = {
        id: 123,
        name: 'Roberto'
    }
    

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ () => setUser(user) }
            >
                Login
            </button>
        </div>
    )
}

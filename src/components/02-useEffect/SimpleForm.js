import React, { useEffect, useState } from 'react';


import './effects.css';
import { Message } from './Message';


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // Este se carga solamente cuando se carga por primera vez el componente
    useEffect( () => {
        //console.log('hey!');
    }, []);

    // Se carga cuando sucede un cambio en el formState
    useEffect( () => {
        //console.log('formState cambio!');
    }, [ formState ]);

    // Se carga cuando sucede un cambio en el email
    useEffect( () => {
        //console.log('email cambio!');
    }, [ email ]);




    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });

    }




    return (
        <>
        <h1>useEffect</h1>
        <hr/>

        <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu Nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            >
            </input>
        </div>

        <br/>

        <div className="form-group">
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@email.com"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            >
            </input>
        </div>

        <br/>

        { ( name === '123' ) && <Message />}
            
        </>
    )
}

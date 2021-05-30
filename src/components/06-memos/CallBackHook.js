import React, { useCallback, useEffect, useState } from 'react';

import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';


export const CallBackHook = () => {


    const [counter, setCounter] = useState( 10 );

    //const increment = () => {
    //    setCounter( counter + 1 );
    //}

    /*
    El useCallback es util para cuando hay que mandar un función y el componente
    esta memorizado, pero si no lo mandamos con el useCallback, siempre se va estar
    generando porque genera una nueva version cada renderizado del componente padre.

    La otra es para cuando tenemos un useEffect, y el efecto tiene una dependencia
    y esa dependencia es la funcion, es recomendado usar el useCallback. asi se
    evita que se renderize cada vez que se use la función.
    */
    const increment = useCallback( (num) => {
        setCounter( c => c + num );
    }, [ setCounter ]);

    useEffect( () => {
        //??
    }, [increment]);


    return (
        <div>
            <h1>useCallBack Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </div>
    )
}

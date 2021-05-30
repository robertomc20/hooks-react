import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    //console.log(loading, data);

    // con el doble negación, se pregunta si existe data, entonces extra la pos 0
    const { quote } = !!data && data[0];
    //console.log( author, quote );

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () => {

        setBoxSize( pTag.current.getBoundingClientRect() );
        
    }, [ quote ]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <figure className="text-end">
                <blockquote className="blockquote">
                    <p 
                        ref={ pTag }
                        className="mb-0"
                    > 
                        { quote } 
                    </p>
                </blockquote>   
            </figure>

            <pre>
                { JSON.stringify( boxSize, null, 3) } 
            </pre>
                                

            <button className="btn btn-primary"
                    onClick={ increment }>
                Siguiente quote
            </button>


        </div>
    )
}

import React, { memo } from 'react'


// El memo, permite memorizar y regresar la forma renderizada del componente
// y solo actualizará el componente, si cambian las propiedades.
// Otra forma de usar el memo, es no importarlo, pero llamarlo React.memo().
export const Small = memo(({ value }) => {

    console.log(' Me volví a llamar ');


    return (
        <small> { value } </small>
    )
})

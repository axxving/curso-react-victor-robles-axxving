import React from 'react';

export const TercerComponente = ({nombre, apellido, ficha}) => {
    
    return (
        <div>
            <h2>Comunicacion entre componentes</h2>
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.estado}</li>
            </ul>
        </div>
    )
}
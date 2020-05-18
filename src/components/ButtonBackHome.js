import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBackHome = () => (
    <Link
        className='button is-info'
        to='/'
    >
        Volver al inicio
    </Link>
)
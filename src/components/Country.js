import React from 'react';

const Country = (props) => {
    const{name} = props.country;
    return (
        <div className='border-2 rounded-lg bg-sky-900'>
            <h1>{name.common}</h1>
        </div>
    );
};

export default Country;
import React from 'react';

const Country = (props) => {
    const{name,population,continents,flags} = props.country;
    return (
        <div className='border-2 rounded-lg bg-sky-900 p-5'>
            <img className='w-[75%] block mx-auto' src={flags.png} alt="" />
            <h2 className='text-center mt-2'>{name.common}</h2>
            <h3 className='text-center mt-2'>Continents : {continents[0]}</h3>
            <h4 className='text-center mt-2'>Populations : {population}</h4>
        </div>
    );
};

export default Country;
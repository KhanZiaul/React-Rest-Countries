import React from 'react';

const Country = (props) => {
    const{name,population,continents,flags} = props.country;
    return (
        <div className=' grid grid-cols-3'>
            <div className='border-2 rounded-lg bg-sky-900 p-5'>
            <img className='w-[50%]' src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <h3>{continents[0]}</h3>
            <h4>{population}</h4>
            </div>
        </div>
    );
};

export default Country;
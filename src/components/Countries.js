import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {

    const [countries,setCountries]= useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
            <div className='grid grid-cols-3 gap-4 mt-9'>
            {
                countries.map(country=> <Country key={country.cca3} country={country}></Country>)
            }         
            </div>
    );
};

export default Countries;
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1 className='text-3xl text-center mb-4 mt-4'>Rest Countries</h1>
                <nav className='flex justify-between mb-4'>
                    <a href="/home">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                </nav>
        </div>
    );
};

export default Header;
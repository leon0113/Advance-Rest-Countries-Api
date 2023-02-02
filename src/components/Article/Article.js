import React from 'react';

const Article = (props) => {
    return (
        <div>
            <article className='bg-white rounded-lg shadow overflow-hidden hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200'>
                <img src={props.flags.svg} alt="" className='md:h-64 w-full object-cover' />
                <div className="p-4">
                    <h2 className='font-bold text-lg text-gray-900 mb-2 dark:text-white'>{props.name.common}</h2>
                    <ul className='flex flex-col items-start justify-start gap-2 dark:text-gray-400'>
                        <li>Capital: {props.capital}</li>
                        <li>Population: {props.population.toLocaleString()}</li>
                        <li>Region: {props.region}</li>
                        <li>Subregion: {props.subregion}</li>
                    </ul>
                </div>
            </article>
        </div>
    );
};

export default Article;
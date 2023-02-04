import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Country = () => {
    const { name } = useParams();

    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, []);
    return (
        <div>
            <section className='p-8 md:py-0 max-w-7xl mx-auto'>
                {
                    country.map(item =>
                    (
                        <div key={item.population} className="grid grid-col-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen">
                            <article>
                                <img src={item.flags.svg} alt={item.name.common} />
                            </article>

                            <article>
                                <h1 className='font-bold text-gray-900 text-4xl lg:text-5xl mb-8 dark:text-white'>{item.name.official}</h1>
                                <ul className='mt-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400'>
                                    <li>Capital : {item.capital[0]}</li>
                                    <li>Population : {item.population}</li>
                                    {/* <li>Currency :</li> */}
                                    <li>Region : {item.region}</li>
                                    <li>Subregion : {item.subregion}</li>
                                </ul>
                                {item.borders && <div>
                                    <h3 className='text-gray-900 font-bold text-lg mb-2 dark:text-white'>Borders :</h3>
                                    <ul className='flex flex-wrap items-start justify-start gap-2'>
                                        {
                                            item.borders.map((border, index) => (
                                                <li key={index} className="bg-white p-2 rounded text-xs tracking-wide shadow text-gray-500 dark:bg-gray-800 dark:text-gray-400">{border}</li>
                                            ))
                                        }
                                    </ul>
                                </div>}

                                <Link to="/" className='inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-800 hover:bg-gray-300 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400'>&larr; Back</Link>

                            </article>
                        </div>
                    )
                    )
                }
            </section>
        </div>
    );
};

export default Country;
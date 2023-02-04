import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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
                                <h1 className='font-bold text-gray-900 text-4xl lg:text-5xl'>{item.name.official}</h1>
                                <ul className='mt-4 flex flex-col items-start justify-start gap-2 text-slate-700'>
                                    <li>Capital : {item.capital[0]}</li>
                                    <li>Population : {item.population}</li>
                                    {/* <li>Currency :</li> */}
                                    <li>Region : {item.region}</li>
                                    <li>Subregion : {item.subregion}</li>
                                </ul>
                                {item.borders && <div>
                                    <h3>Borders :</h3>
                                    <ul>
                                        {
                                            item.borders.map((border, index) => (
                                                <li key={index}>{border}</li>
                                            ))
                                        }
                                    </ul>
                                </div>}
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
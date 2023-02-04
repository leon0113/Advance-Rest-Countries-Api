import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all");
                const data = await res.json();
                setCountries(data.slice(0, 12));
            } catch (error) {
                console.error(error)
            }
        }
        getCountries();
    }, [])
    return (
        <div>
            {!countries ? (<h1 className='text-gray-900 font-bold uppercase flex items-center justify-center text-center h-screen text-4xl tracking-wide dark:text-white'>Loading...</h1>) : (
                <section className='container mx-auto p-8'>
                    {/* form  */}
                    <div>
                        <form>
                            <input type="text" name='search' id='search' placeholder='Search for a country by its name' required />
                        </form>
                    </div>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                        {
                            countries.map(country => <Article key={country.name.common} {...country}></Article>)
                        }
                    </div>
                </section>)}

        </div>
    );
};

export default Countries;
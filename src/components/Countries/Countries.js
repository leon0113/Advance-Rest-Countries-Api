import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const regions = [
        {
            name: 'Europe'
        },
        {
            name: 'Asia'
        },
        {
            name: 'Africa'
        },
        {
            name: 'Americas'
        },
        {
            name: 'Oceania'
        },
        {
            name: 'Antarctic'
        },
    ]

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
                    <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8'>
                        <form autoComplete='off' className='max-w-4xl md:first-letter md:flex-1'>
                            <input type="text"
                                name='search'
                                id='search'
                                placeholder='Search for a country by its name'
                                required
                                className='py-3 px-4 text-gray-800 placeholder-gray-800 shadow rounded w-full outline-none'
                            />
                        </form>

                        <form>
                            <select className='w-52 outline-none py-3 px-4 shadow rounded' name="filter-by-region" id="filter-by-region">
                                {
                                    regions.map((region, index) => (
                                        <option key={index} value={region.name}>
                                            {region.name}
                                        </option>
                                    ))
                                }
                            </select>
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
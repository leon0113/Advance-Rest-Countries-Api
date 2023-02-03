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
            <section>
                {
                    country.map(item =>
                    (
                        <div>
                            <article>
                                <img src={item.flags.svg} alt="" />
                                <h1>{item.name.common}</h1>
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
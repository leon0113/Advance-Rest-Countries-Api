import React from 'react';

const Article = (props) => {
    return (
        <div>
            <article>
                <img src={props.flags.svg} alt="" />
            </article>
        </div>
    );
};

export default Article;
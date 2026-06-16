import React from "react";

const Phrase = ( {text, author} ) => {
    return (
        <div>
            <p>{text}</p>
            <p className="underline decoration-sky-500"><em>- {author}</em></p>
        </div>
    );
};

export default Phrase;
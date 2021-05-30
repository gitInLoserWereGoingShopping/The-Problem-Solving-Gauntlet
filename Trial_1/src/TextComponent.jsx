import React from 'react';
import TextBox from './TextBox.jsx';

//props -> someText (array of strings), alertWindow (alert)
const TextComponent = ({someText, alertWindow}) => {

    return (
        someText.map((currentItem, i) => {
                return (
                    <TextBox key={currentItem}
                        text={currentItem} 
                        func={alertWindow}/>
                )
        })
    )
};

export default TextComponent;
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';

const items = [
     {
         title : "What is React?",
         content: "React is front end javascript framework"
     },
     {
         title : "Why use React?",
         content : "React is  a favorite JS library among engineers",
     },
     {
         title : "How do you use React",
         content : "You use React by creating components"
     }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red',
    },
    {
        label: 'The Color Green',
        value: 'green', 
    },
    {
        label: 'The Shade Blue',
        value: 'blue',
    }
];

export default () =>{

    return(
        <div>
            <Translate />
        </div>
    )
}
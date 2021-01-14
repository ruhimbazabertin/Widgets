import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Route   from './components/Route';
import Header  from  './components/Header';

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

    const [selected, setSelected] = useState(options[0]);

    return(
        <div>
            <Header />
            <Route path='/'>
                <Accordion items = {items}/>
                </Route>
                <Route path='/list'>
                    <Search />
                </Route>
                    <Route path='/dropdown'>
                    <DropDown
                    label="Select color"
                    selected={selected}
                    options={options}
                    onSelectedChange={setSelected}
                     />
                    </Route>
                    <Route path='/translate'>
                        <Translate />
                        </Route>
        </div>
    )
}
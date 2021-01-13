import React, {useState} from 'react';
import Dropdown from './DropDown';
import Convert from './Convert';

const Translate = () => {
    const options = [
        {
            label: 'Afrikaans',
            value: 'af',
        },
        {
            label: 'Arabic',
            value: 'ar',
        },
        {
            label: 'Hindi',
            value: 'hi',
        },
        {
            label: 'kinyarwanda',
            value: 'rw',
        },
        {
            label: 'English',
            value: 'en'
        }
    ];
    const[language, setLanguage] = useState(options[0]);
    const[text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            </div>
            <Dropdown 
            label="Select Language"
            selected={language}
            onSelectedChange={setLanguage}
            options={options}
            />
            <hr/>
            <h2 className="header">Output</h2>
            
            <Convert 
            text={text} 
            language={language}
            />

        </div>
    )
}

export default Translate;
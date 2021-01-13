import React, { useEffect, useState } from 'react';
import axios from 'axios'


const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    console.log(results);

    useEffect(() => {
        const searchTerm = async () => {
         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
              params:{
                 action:'query',
                 list: 'search',
                 origin: '*',
                 format: 'json',
                 srsearch: term,
                 

              }
          });

          setResults(data.query.search);
        };
        //Check if component is rerendered for the first time and skip delaying, and searching automatically.
        if(term && !results.length){
            searchTerm();
        }else{
         //short delay before to make a request 
        const timeoutId = setTimeout(() => {
            if(term){
                searchTerm();
        }
    }, 1000);
    return () => {
        clearTimeout(timeoutId);
    };
}
    }, [term]);

    const renderedResult = results.map((result) => {

        return (
            <div key={result.pageid} className="item">
                    <div className="content">
                        <div className ="right floated content">
                            <a
                            className="ui button"
                            href={`https://en.wikipedia.org?curid=${result.pageid}`} 
                            >
                                Go
                            </a>
                            </div>
                        <div className="header">
                            {result.title}
                            </div>
                            {/*This is a technique to remove html tag in the browser from result.snippet*/}
                            <span dangerouslySetInnerHTML = {{__html: result.snippet}}></span>
                            {/*{result.snippet}*/}
                    </div>
            </div>

        );
    });

    return (
        <div>
            <div className="ui form">
            <div className="field">
                <div className="searchTerm">
                    <label>Enter Search Term</label>
                    <input type="text" className="input"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    />
                    </div>
                </div>
        </div>
        <div className="ui celled list">{renderedResult}</div>
        </div>
    )

}

export default Search;
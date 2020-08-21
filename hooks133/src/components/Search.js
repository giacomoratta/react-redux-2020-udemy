// Solution to warning:
// React Hook useEffect has a missing dependency: 'results.length'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

// is it worth to follow the hint and put results.length as useEffect dependency?
// - always worth to avoid warnings because they can lead into strange bugs
// - better avoid double fetching (2 elements in [] for useEffect)
// need to change the entire structure
// use debouncedTerm
// use 2 separate useEffect(s)

import React, { useState, useEffect /* hook */ } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // this section actually implements the debouncing action
  // to make sure we do not do our searches immediately
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 700);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  // basically equal to the previous one
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });
      setResults(data.query.search);
    };
    search();

  }, [debouncedTerm] /* !!! */);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >Go</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html:result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;
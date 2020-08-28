import React, { useState, useEffect /* hook */ } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  /**
   * Second argument:
   * 1) initial render -> []
   * 2) whenever it renders -> undefined
   * 3) whenever it renders and data changed -> [var1,var2,...]
   */
  useEffect(/* async not allowed */() => {

    /* Solution 1 */
    // const search = async () => {
    //     await axios.get('abcde');
    // };
    // search();

    /* Solution 2 */
    // (async () => {
    //     await axios.get('abcde');
    // })();

    /* Solution 3 */
    // axios.get('abcde')
    //     .then((response) => {
    //         console.log(response.data);
    //     });

    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });
      setResults(data.query.search);
    };

    // skip timeout the first time (state has an initial term)
    // N.B. after this line we got warning: React Hook useEffect has a missing dependency: 'results.length'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    if (term && !results.length) {
      search();
      return;
    }

    const timeoutId = setTimeout(() => {
      if(term) search();
    }, 700);

    // return -> (a new) cleanup function!
    // next time, useEffect will call the previous cleanup fn,
    // then execute the cb and store the new cleanup function
    return () => {
      clearTimeout(timeoutId);
    };

  }, [term]);

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
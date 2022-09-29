import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  //helper function that sorts quotes by their id. the 'ascending' is a boolean
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  })
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation(); //this hook gives us the info for the current URL location

  const queryParams = new URLSearchParams(location.search); //URLSearchParams is a browser API
  const isSortingAscending = queryParams.get('sort') === 'asc'; // returns boolean

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const sortingHandler = () => {
    history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

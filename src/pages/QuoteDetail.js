import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Prateek", text: "Learning React is fun!" },
  { id: "q2", author: "James", text: "Singing is fun!" },
  { id: "q3", author: "Kerry", text: "Guitar solo are fun!" },
];

const QuoteDetail = () => {
    const param = useParams();

    const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);
    if(!quote) {
      return <p>No Quote found!</p>
    }
    
  return (
    <>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${param.quoteId}`} exact>
          {/* This nested 'exact' route displays the comments button (Nested as in from the app.js) */}
          <div className="centered">
            <Link className="btn--flat" to={`/quotes/${param.quoteId}/comments`}>Load Comments</Link>
          </div>
        </Route>
        <Route path={`/quotes/${param.quoteId}/comments`}>
          {/* This nested route displays the comments, and not the loading button */}
            <Comments />
        </Route>
    </>
  )
};

export default QuoteDetail;

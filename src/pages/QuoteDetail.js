import { useParams, Route } from "react-router-dom";
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
        <Route path={`/quotes/${param.quoteId}/comments`}>
            <Comments />
        </Route>
    </>
  )
};

export default QuoteDetail;

import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const param = useParams();
    
  return (
    <>
        <h1>Quote Detail</h1>
        <p>{param.quoteId}</p>
        <Route path={`/quotes/${param.quoteId}/comments`}>
            <Comments />
        </Route>
    </>
  )
};

export default QuoteDetail;

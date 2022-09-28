import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Prateek", text: "Learning React is fun!" },
  { id: "q2", author: "James", text: "Singing is fun!" },
  { id: "q3", author: "Kerry", text: "Guitar solo are fun!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;

import { Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SIngleBook";

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {fantasy.map((book) => {
        return <SingleBook key={book.asin} book={book} />;
      })}
    </Row>
  );
};

export default AllTheBooks;

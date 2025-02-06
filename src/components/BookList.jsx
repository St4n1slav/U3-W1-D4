import { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import SingleBook from "./SIngleBook";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class BookList extends Component {
  state = {
    books: this.props.books,
  };

  render() {
    return (
      <Container>
        <div className="d-flex gap-1">
          <Button variant="primary" onClick={() => this.setState({ books: fantasy })}>
            Fantasy
          </Button>
          <Button variant="primary" onClick={() => this.setState({ books: history })}>
            History
          </Button>
          <Button variant="primary" onClick={() => this.setState({ books: horror })}>
            Horror
          </Button>
          <Button variant="primary" onClick={() => this.setState({ books: romance })}>
            Romance
          </Button>
          <Button variant="primary" onClick={() => this.setState({ books: scifi })}>
            Scifi
          </Button>
        </div>
        <Row className="g-2">
          {this.props.books.map((book) => {
            return <SingleBook key={book.asin} book={book} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;

import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    let cardClass = "book-cover d-flex flex-column";
    let book = this.props.book;
    if (this.state.selected) {
      cardClass += " cardBorder";
    }
    return (
      <Col xs={12} md={4} key={book.asin}>
        <Card
          className={cardClass}
          onClick={() => {
            this.setState({ selected: !this.state.selected });
            console.log(this.state.selected);
          }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Subtitle>{book.price}€</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;

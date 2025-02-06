import { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import SingleBook from "./SIngleBook";

class CommentArea extends Component {
  token = "";
  state = {
    comments: [],
  };

  fetchReservations = async () => {
    let book = this.props.book;
    const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${book.asin}`, {
      method: "get",
      headers: new Headers({
        Authorization: "Basic " + this.token,
        "Content-Type": "application/json",
      }),
    });
  };
  componentDidMount() {
    this.fetchReservations();
  }

  render() {
    return (
      <Container>
        <div></div>
      </Container>
    );
  }
}

export default CommentArea;

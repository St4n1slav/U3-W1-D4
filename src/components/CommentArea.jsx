import { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import SingleBook from "./SIngleBook";

class CommentArea extends Component {
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGU0MWNhMDcwNDAwMTU4YmY5N2EiLCJpYXQiOjE3Mzg4NTgwNDksImV4cCI6MTc0MDA2NzY0OX0.3uYSlfttzrjw-ld_EF0TTSgH92Oixou08Tponvw7Egs";
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

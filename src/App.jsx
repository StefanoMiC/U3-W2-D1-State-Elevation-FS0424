import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Details from "./components/Details";
import { Component } from "react";

class App extends Component {
  state = {
    selected: null
  };

  changeSelected = newValue => {
    this.setState({ selected: newValue });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6}>
            <Table selected={this.state.selected} changeSelected={this.changeSelected} />
          </Col>
          <Col xs={12} md={6}>
            <Details selected={this.state.selected} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

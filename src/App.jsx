import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Details from "./components/Details";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>
          <Table />
        </Col>
        <Col xs={12} md={6}>
          <Details />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

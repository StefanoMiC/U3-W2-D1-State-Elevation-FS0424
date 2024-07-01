import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Details from "./components/Details";
import { Component } from "react";

class App extends Component {
  // lo stato in questo livello diventa l'unica fonte di verità per questo dato
  // che farà aggiornare i componenti che sono in lettura di esso tramite le loro props!

  state = {
    selected: null
  };
  // stiamo creando una funzione che ci permetterà di cambiare lo stato IN QUESTO LIVELLO (lo stato di App), da un livello inferiore (da un child)

  changeSelected = newValue => {
    // questa funzione viene chiamata dentro a Table nel quale si passa anche newValue come argomento
    // di fatto quindi è il componente Table che sta settando lo stato in questo livello
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

import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Table extends Component {
  state = {
    selected: null
  };

  checkSelected = value => (this.state.selected === value ? "selected" : "");

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item onClick={() => this.setState({ selected: "Uno" })} className={this.checkSelected("Uno")}>
            Uno
          </ListGroup.Item>
          <ListGroup.Item onClick={() => this.setState({ selected: "Due" })} className={this.checkSelected("Due")}>
            Due
          </ListGroup.Item>
          <ListGroup.Item onClick={() => this.setState({ selected: "Tre" })} className={this.checkSelected("Tre")}>
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p>
          L&apos; elemento attualmente selezionato è <strong>{this.state.selected || "non selezionato"}</strong>
        </p>
      </>
    );
  }
}

export default Table;

import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Table extends Component {
  //   state = {
  //     selected: null
  //   };
  // state è stato spostato in App, al livello superiore

  checkSelected = value => (this.props.selected === value ? "selected" : "");

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item onClick={() => this.props.changeSelected("Uno")} className={this.checkSelected("Uno")}>
            Uno
          </ListGroup.Item>
          <ListGroup.Item onClick={() => this.props.changeSelected("Due")} className={this.checkSelected("Due")}>
            Due
          </ListGroup.Item>
          <ListGroup.Item onClick={() => this.props.changeSelected("Tre")} className={this.checkSelected("Tre")}>
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p>
          L&apos; elemento attualmente selezionato è <strong>{this.props.selected || "non selezionato"}</strong>
        </p>
      </>
    );
  }
}

export default Table;

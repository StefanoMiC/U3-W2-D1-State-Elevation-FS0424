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
          {/* essendo che changeSelected è una prop contenente il riferimento ad una funzione, 
          può essere trattata lei stessa come la funzione che contiene, quindi possiamo tranquillamente
          chiamarla passandole un argomento */}
          <ListGroup.Item onClick={() => this.props.changeSelected("Uno")} className={this.checkSelected("Uno")}>
            Uno
          </ListGroup.Item>
          {/* l'argomento cambia per le diverse esecuzioni di questa funzione */}
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

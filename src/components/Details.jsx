import { Alert } from "react-bootstrap";

// questo componente è in lettura dello stato condiviso da App.jsx
const Details = ({ selected }) => <Alert variant="success">{selected || "Non selezionato"}</Alert>;

export default Details;

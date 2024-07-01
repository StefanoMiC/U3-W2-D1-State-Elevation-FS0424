import { Alert } from "react-bootstrap";

const Details = ({ selected }) => <Alert variant="success">{selected || "Non selezionato"}</Alert>;

export default Details;

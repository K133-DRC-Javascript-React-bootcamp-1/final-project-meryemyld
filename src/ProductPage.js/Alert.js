import React from "react";
import { Modal, Button } from "react-bootstrap";

const Alert = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Demo Mode</Modal.Title>
        </Modal.Header>
        <Modal.Body>Due to demo mode this section can not be used.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Alert;

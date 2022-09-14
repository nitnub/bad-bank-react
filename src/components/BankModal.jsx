import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const BankModal = (props) => {
 const { modalmessage, onHide } = props;
  return (
<>

<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
  
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalmessage.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{modalmessage.header}</h4>
        <p>
          {modalmessage.body}
        </p>
      </Modal.Body> 
      <Modal.Footer>
        <Button className={"btn-dark"} onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default BankModal;
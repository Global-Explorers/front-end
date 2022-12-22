import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectFlight extends React.Component {
    render() {
        return (
            <Modal>
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body ></Modal.Body>
                    {/* <Modal.Footer><Button onClick={}>Close</Button></Modal.Footer> */}
                </Modal.Dialog>
            </Modal>

        )
    }
}

export default SelectFlight;
import React from 'react'
import { Modal } from 'react-bootstrap'
import { CommonContext } from './CommonContext'


function ModalPopup() {
    {
    return (
        <CommonContext.Consumer>
        {
            ({modalStatus})=>{
            <div>
            <Modal show={modalStatus} >
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <button >Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
        </div>
            }
        }
        </CommonContext.Consumer>
    )
    }
}

export default ModalPopup

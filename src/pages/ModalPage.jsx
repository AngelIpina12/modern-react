import React, { useState } from 'react'
import { Modal } from '../components/Modal'
import { Button } from '../components/Button'

export const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }
    const actionBar = <Button onClick={handleClose} primary>I Accept</Button>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}

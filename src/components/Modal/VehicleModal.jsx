/* Core */
import React, { useEffect, useState } from 'react';

/* Material */
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './VehicleModal.css.js';

export const VehicleModal = ({ showModal, vehicle, toggleModal, onSubmit }) => {
  const [modalData, setModalData] = useState(vehicle);

  useEffect(() => {
    setModalData(vehicle);
  }, [vehicle]);

  return (
    <Modal
      aria-labelledby="transition-modal"
      aria-describedby="description"
      style={styles.modal}
      open={showModal}
      onClose={() => toggleModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={showModal}>
        <div style={styles.content}>
          <h2>Maintenance information</h2>
          <TextField
            label="Identifier"
            inputProps={{ maxLength: 15 }}
            defaultValue={vehicle?.vehicle_id || ""}
            variant="outlined"
            style={styles.person}
            onChange={e => setModalData(data => ({ ...data, vehicle_id: e.target.value }))}
          />
          <TextField
            label="Person"
            defaultValue={vehicle?.person || ""}
            inputProps={{ maxLength: 200 }}
            variant="outlined"
            style={styles.person}
            onChange={e => setModalData(data => ({ ...data, person: e.target.value }))}
          />
          <div style={styles.inputContent}>
            <label>Estimated delivery date:</label>
            <input
              type="date"
              defaultValue={vehicle?.estimatedate?.substring(0, 10)}
              style={styles.input}
              onChange={e => setModalData(data => ({ ...data, estimatedate: e.target.value }))}
            />
          </div>
          <Button variant="outlined" style={styles.button} onClick={() => onSubmit(modalData)}>Send</Button>
        </div>
      </Fade>
    </Modal>
  );
}
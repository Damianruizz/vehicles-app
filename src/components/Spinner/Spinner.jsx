import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styles from './Spinner.css.js';

export const Spinner = ({ showSpinner }) => {
  return(
    <div>
      {showSpinner ? 
        <div>
          <CircularProgress disableShrink style={styles.spinner} />
          <div style={styles.background}></div>
        </div>
      : ''}
    </div>
  );
}
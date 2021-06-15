import { vehiclesList, putMaintenance } from '../fetch.js';

export const getVehicles = dispatch => {
  dispatch({ type: 'VEHICLES_FETCH_STARTED' });
  return vehiclesList()
    .then(data => {
      return dispatch({ type: 'VEHICLES_RETRIVED', data: data?.vehicles });
    });
}

export const updateMaintenance = (dispatch, payload) => {
  dispatch({ type: 'VEHICLES_UPDATE_STARTED' });
  return putMaintenance(payload)
    .then(data => {
      return dispatch({ type: 'VEHICLES_UPDATED', data: data?.vehicle });
    });
}
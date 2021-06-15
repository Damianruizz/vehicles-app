/* Core */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Components */
import { VehicleCard } from '../Card/VehicleCard';
import { Spinner } from '../Spinner/Spinner';
import { VehicleModal } from '../Modal/VehicleModal';
import styles from './DashboardContainer.css.js';

/* Actions */
import { getVehicles, updateMaintenance } from '../../actions/VehiclesActions';

export const DashboardContainer = props => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.VehiclesReducer.isLoading);
  const vehicles = useSelector(state => state.VehiclesReducer.vehicles);
  
  const [showModal, toggleModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState({});

  useEffect(() => {
    getVehicles(dispatch);
  }, []);

  /**
  * @desc handles the checkbox event 'in_maintenance'
  * @params {Object}
  */
  const setInMaintenance = vehicle => {
    if (!vehicle?.in_maintenance) {
      setSelectedVehicle(vehicle);
      toggleModal(true);
    } else {
      setSelectedVehicle({});
      updateMaintenance(dispatch, {
        ...vehicle,
        in_maintenance: 0,
        estimatedate: vehicle?.estimatedate?.substring(0, 10)
      });
    }
  };

  /**
  * @desc handles the request to update a maintenance
  * @params {Object}
  */
  const handleUpdate = data => {
    toggleModal(false);
    updateMaintenance(dispatch, {
      ...data,
      in_maintenance: 1,
      estimatedate: data?.estimatedate?.substring(0, 10),
      person: data?.person || "",
    });
  };

  return (
    <div style={styles.dashboard}>
      {vehicles?.map(vehicle => (
        <VehicleCard vehicle={vehicle} key={vehicle.id} setInMaintenance={setInMaintenance} />
      ))}
      <Spinner showSpinner={isLoading} />
      <VehicleModal showModal={showModal} vehicle={selectedVehicle} toggleModal={toggleModal} onSubmit={handleUpdate} />
    </div>
  );
}
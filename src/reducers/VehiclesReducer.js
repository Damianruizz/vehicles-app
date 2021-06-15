const initialState = {
  vehicles: [],
  isLoading: false,
};

const VehiclesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'VEHICLES_FETCH_STARTED':
    case 'VEHICLES_UPDATE_STARTED':
      return Object.assign({}, state, { isLoading: true });
    case 'VEHICLES_RETRIVED':
      return Object.assign({}, state, { isLoading: false, vehicles: action.data });
    case 'VEHICLES_UPDATED':
      return Object.assign({}, state, {
        isLoading: false,
        vehicles: state?.vehicles.map(vehicle => {
          if (vehicle.id === action?.data?.id) return { ...action.data };
          return { ...vehicle };
        })
      });
    default:
      return state;
  }
}

export default VehiclesReducer;
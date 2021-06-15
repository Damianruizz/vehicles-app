const vehiclesUrl = 'http://localhost:8000/api/vehicles';

/**
* @desc generic request for the API
* @params {String} {String} {Object}
*/
const complexRequest = (url, method, data) => {
  const postData = {
    method,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(url, postData);
}

/**
* @desc make the request to the API to obtain all the vehicles under maintenance
* @params {}
*/
export const vehiclesList = () => {
  return complexRequest(vehiclesUrl, 'GET').then(response => response.json());
}

/**
* @desc make the request to the API to update a maintenance
* @params {Object}
*/
export const putMaintenance = data => {
  return complexRequest(vehiclesUrl, 'PUT', data).then(response => response.json());
}
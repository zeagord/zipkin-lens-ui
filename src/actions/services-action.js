import * as types from '../constants/action-types';
import * as api from '../constants/api';

export const fetchServicesRequest = () => ({
  type: types.FETCH_SERVICES_REQUEST,
});

export const fetchServicesSuccess = services => ({
  type: types.FETCH_SERVICES_SUCCESS,
  services,
});

export const fetchServicesFailure = () => ({
  type: types.FETCH_SERVICES_FAILURE,
});

export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const res = await fetch(api.SERVICES);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const services = await res.json();
    dispatch(fetchServicesSuccess(services));
  } catch (err) {
    dispatch(fetchServicesFailure());
  }
};

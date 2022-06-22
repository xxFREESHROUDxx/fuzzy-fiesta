import { ADD_TO_CART } from '../Constants';
import { REMOVE_TO_CART } from '../Constants';

export const addToCart = (data) => {
  // console.warn('actions', data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = (data) => {
  // console.warn('action');
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};

import { combineReducers } from 'redux';
import car from './car'; 
import cart from './cart';


const rootReducer = combineReducers({
    car: car,
    cart: cart
});

export default rootReducer;
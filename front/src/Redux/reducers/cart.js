import * as type from '../constants/cart';
import { initialState } from '../states/cart';
export default function car(state = initialState, action) {
    switch (action.type) {
        case type.ADD_CAR:
            return {
                ...state,
                total: action.total.map(product =>
                  product.id === action.id ? {...product, selected: true} : product,
                ),
              };
            
        default:
            return state;
    }
}
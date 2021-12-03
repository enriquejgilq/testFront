import * as type from '../constants/cart';

export function addtocar ( total ) {
    return {
        type: type.ADD_CAR,
        total,
    }
}

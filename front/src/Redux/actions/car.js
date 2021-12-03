import * as type from '../constants/car';

export function getAllData() {
    return {
        type: type.GET_DATA,
    }
}
export function getByIddata ( id ) {
    return {
        type: type.GET_BY_ID,
        id,
    }
}

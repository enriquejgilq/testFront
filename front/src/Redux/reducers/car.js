import * as type from '../constants/car';
import { initialState } from '../states/car'
export default function car(state = initialState, action) {
    switch (action.type) {
        case type.GET_DATA:
            return {
                ...state,
                loading: true,
                error: false,
                data: []
            }
        case type.GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.data

            }
        case type.GET_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.message,
                data: []
            }
        case type.GET_BY_ID:
            return {
                ...state,
                loading: true,
                error: false,
                detail: {}
            }
        case type.GET_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                detail: action.detail
            }
        case type.GET_BY_ID_ERROR:
            return {
                ...state,
                loading: false,
                error: action.message,
                detail: {}
            }
        default:
            return state;
    }
}
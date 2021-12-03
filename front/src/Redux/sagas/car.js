import { call, put, takeEvery, select } from "redux-saga/effects";
import axios from 'axios';
import Api from "../api";
import { GET_DATA,
    GET_DATA_ERROR,
    GET_DATA_SUCCESS,
    GET_BY_ID,
    GET_BY_ID_ERROR,
    GET_BY_ID_SUCCESS,

} from '../constants/car'

function getallDataAxios() {
    return axios({
        method: 'get',
        url: `${Api}/products`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then((response) => {
            return response.data
        })
        .catch(error => {
            throw error.response?.data
        });
}

function* getAllData(action) {
    try {
        const data = yield call(getallDataAxios, action)
        yield put({ type: GET_DATA_SUCCESS, data:data });
    } catch (error) {
        yield put({ type: GET_DATA_ERROR, message: error ? String(error.error) : "Error de conexión" });
    }
}

function getByIdAxios(id) {
    return axios({
        method: 'get',
        url: `${Api}/products/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then((response) => {   
            return response.data
        })
        .catch(error => {
            throw error.response?.data
        });
}
function* getById(action) {
    try {
        const detail = yield call(getByIdAxios, action.id)
        yield put({ type: GET_BY_ID_SUCCESS, detail:detail });
    } catch (error) {
        yield put({ type: GET_BY_ID_ERROR, message: error ? String(error.error) : "Error de conexión" });
    }
}

export default function* carSaga() {
    yield takeEvery(GET_DATA,getAllData)
    yield takeEvery(GET_BY_ID,getById)

  }
import { all } from 'redux-saga/effects';
import carSaga from './car';


export default function* rootSaga(){
    yield all([
      carSaga()
    ])
}
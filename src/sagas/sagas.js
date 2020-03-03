import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import { cityNameSelector }  from '../reducers/addInfoReducer'
import { SUBMIT_INFO } from '../actions'

// api key for open weather - c16068e591cef9df6b42c10ed449c004

// const url = api.openweathermap.org/data/2.5/weather?q={cityNameSelector}&appid=c16068e591cef9df6b42c10ed449c004

// export default function* getWeather() {
//     yield take(SUBMIT_INFO, function fetchWeather () {
//         try {
//             const response = yield call(fetch, url);
//             const responseBody = response.json();
//         } catch (e) {
//             console.log('failed');
//             return;
//         }
//     });
// }

/*
import { takeLatest, put, call } from 'redux-saga/effects';

import fetchFailed from 'actions/fetch-failed';
import setRecords from 'actions/set-records';

export default function* onFetchRecords() {
  yield takeLatest('RECORDS/FETCH', function fetchRecords() {

    try {
        const response = yield call(fetch, 'https://api.service.com/endpoint');
        const responseBody = response.json();
    } catch (e) {
        yield put(fetchFailed(e));
        return;
    }

    yield put(setRecords(responseBody.records));
  });
}
*/
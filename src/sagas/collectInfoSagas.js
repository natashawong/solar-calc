import { take } from 'redux-saga/effects';
import { ACTIONS } from '../actions/index';

export default function* collectInfoSagaRuntime() {
    while (true) {
        const action = yield take(ACTIONS.SUBMIT_INFO);
        console.log('action taken')
        console.log(action.payload)
    }
}
/* eslint-disable */
import {
    createAlert, CreateAlertFail, CreateAlertSuccess,
    deleteAllAlerts, deleteAllAlertsFail,
    deleteAllAlertsSuccess, deleteSingleItemAlert, deleteSingleItemAlertFail, deleteSingleItemAlertSuccess,
    getListAlerts,
    getListAlertsFail,
    getListAlertsSuccess
} from "../actionCreators";
import {call, put} from "redux-saga/effects";

export function* GetListAlerts() {
    try {
        // @ts-ignore
        const response = yield call(getListAlerts)
        yield put(getListAlertsSuccess(response))
    } catch (error) {
        // @ts-ignore
        yield put(getListAlertsFail(error))
    }
}

export function* DeleteAllAlerts () {
    try {
        // @ts-ignore
        const response = yield call(deleteAllAlerts)
        // @ts-ignore
        yield put(deleteAllAlertsSuccess(response))
    } catch (error) {
        // @ts-ignore
        yield put(deleteAllAlertsFail(error))
    }
}

export function* DeleteSingleItemAlert () {
    try {
        // @ts-ignore
        const response = yield call(deleteSingleItemAlert)
        // @ts-ignore
        yield put(deleteSingleItemAlertSuccess(response))
    } catch (error) {
        // @ts-ignore
        yield put(deleteSingleItemAlertFail(error))
    }
}

export function* CreateAlert () {
    try{
        // @ts-ignore
        const response = yield call(createAlert)
        // @ts-ignore
        yield put(CreateAlertSuccess(response))
    } catch (error) {
        // @ts-ignore
        yield put(CreateAlertFail(error))
    }
}

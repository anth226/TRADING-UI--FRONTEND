/* eslint-disable */
import {call, put} from "redux-saga/effects";
import {
    createBLXItem, createBLXItemFail, createBLXItemSuccess,
    createStakeItem, createStakeItemFail, createStakeItemSuccess,
    deleteBLXItem, deleteBLXItemFail, deleteBLXItemSuccess,
    deleteStakeItem, deleteStakeItemFail, deleteStakeItemSuccess,
    getAnalyticsData, getAnalyticsDataFail, getAnalyticsDataSuccess,
    getBLXData, getBLXDataFail, getBLXDataSuccess,
    getBLXItem, getBLXItemFail, getBlXItemSuccess,
    getStakeData, getStakeDataFail, getStakeDataSuccess,
    getStakingData, getStakingDataFail, getStakingDataSuccess,
    getUnstake, getUnstakeFail, getUnstakeSuccess,
    readStakeItem, readStakeItemFail, readStakeItemSuccess,
    updateBLXItem, updateBLXItemFail, updateBlXItemSuccess,
    updateStakeData, updateStakeDataFail, updateStakeDataSuccess,
    updateStakeItem, updateStakeItemFail, updateStakeItemSuccess,
    updateStakingData, updateStakingDataFail, updateStakingDataSuccess
} from "../actionCreators";



export function* GetStakingData () {
    try {
        // @ts-ignore
        const response = yield call(getStakingData)
        yield put(getStakingDataSuccess(response))
    } catch (error) {
        yield put(getStakingDataFail(error))
    }
}

export function* UpdateStakingData () {
    try {
        // @ts-ignore
        const response = yield call(updateStakingData)
        yield put (updateStakingDataSuccess(response))
    } catch (error) {
        yield put (updateStakingDataFail(error))
    }
}

export function* GetStakeDate () {
    try {
        // @ts-ignore
        const response = yield call (getStakeData)
        yield put (getStakeDataSuccess(response))
    } catch (error) {
        yield put (getStakeDataFail(error))
    }
}

export function* UpdateStakeData () {
    try {
        // @ts-ignore
        const response = yield call (updateStakeData)
        yield put (updateStakeDataSuccess(response))
    } catch (error) {
        yield put (updateStakeDataFail(error))
    }
}

export function* CreateStakeItem () {
    try {
        // @ts-ignore
        const response = yield call (createStakeItem)
        yield put (createStakeItemSuccess(response))
    } catch (error) {
        yield put (createStakeItemFail(error))
    }
}

export function* ReadStakeItem () {
    try {
        // @ts-ignore
        const response = yield call (readStakeItem)
        yield put (readStakeItemSuccess(response))
    } catch (error) {
        yield put (readStakeItemFail(error))
    }
}

export function* UpdateStakeItem () {
    try {
        // @ts-ignore
        const response = yield call ( updateStakeItem)
        yield put (updateStakeItemSuccess(response))
    } catch (error) {
        yield put (updateStakeItemFail(error))
    }
}

export function* DeleteStakeItem () {
    try {
        // @ts-ignore
        const response = yield call (deleteStakeItem)
        yield put (deleteStakeItemSuccess(response))
    } catch (error) {
        yield put (deleteStakeItemFail(error))
    }
}

export function* GetUnstake () {
    try {
        // @ts-ignore
        const response = yield call (getUnstake)
        yield put (getUnstakeSuccess(response))
    } catch (error) {
        // @ts-ignore
        yield put (getUnstakeFail)
    }
}

export function* GetAnalyticsData () {
    try {
        // @ts-ignore
        const response = yield call (getAnalyticsData)
        yield put (getAnalyticsDataSuccess(response))
    } catch (error) {
        yield put (getAnalyticsDataFail(error))
    }
}

export function* GetBLXData () {
    try {
        // @ts-ignore
        const response = yield call (getBLXData)
        yield put (getBLXDataSuccess(response))
    } catch (error) {
        yield put (getBLXDataFail(error))
    }
}

export function* CreateBLXItem () {
    try {
        // @ts-ignore
        const response = yield call(createBLXItem)
        yield put (createBLXItemSuccess(response))
    } catch (error) {
        yield put (createBLXItemFail(error))
    }
}

export function* GetBLXItem () {
    try {
        // @ts-ignore
        const response = yield call (getBLXItem)
        yield put (getBlXItemSuccess(response))
    } catch (error) {
        yield put (getBLXItemFail(error))
    }
}

export function* UpdateBLXItem () {
    try {
        // @ts-ignore
        const response = yield call (updateBLXItem)
        yield put (updateBlXItemSuccess(response))
    } catch (error) {
        yield put (updateBLXItemFail(error))
    }
}

export function* DeleteBLXItem () {
    try {
        // @ts-ignore
        const response = yield call(deleteBLXItem)
        yield put (deleteBLXItemSuccess(response))
    } catch (error) {
        yield put (deleteBLXItemFail(error))
    }
}
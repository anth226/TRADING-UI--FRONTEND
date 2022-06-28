/* eslint-disable */
import { get } from 'http';
import {SignalsActionTypes} from "./actionTypes";


// export const getAllSignals = () => get()


export const getSignals = (payload:any) => ({
    type: SignalsActionTypes.GetAllData,
    payload,
})

export const getSignalsSuccess = (payload:any) => ({
    type:SignalsActionTypes.GetAllDataSuccess,
    payload,
})

export const getSignalsFail = (payload:any) => ({
    type:SignalsActionTypes.GetAllDataFail,
    payload
})
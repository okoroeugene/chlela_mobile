import * as actions from './actions';
import api from '../../../api/apiClient';
import NavigationService from '../../../navigation/NavigationService';
import { Platform, ToastAndroid, } from 'react-native';
import axios from 'axios';

export function createImage(payload) {
    return async (dispatch, getState) => {
        dispatch(actions.request());
        console.log('here', payload)
        try {
            let formData = new FormData();
            formData.append('fileData', payload);

            const res = await api.post(`/file`, formData);
            console.log(res.data)

            {
                Platform.OS === 'android' && ToastAndroid.show(
                    res.data?.message,
                    ToastAndroid.LONG
                )
            }

            dispatch(actions.success(res.data));

        } catch (err) {
            if (err.response) {
                {
                    Platform.OS === 'android' && ToastAndroid.show(
                        error?.response.data,
                        ToastAndroid.LONG
                    )
                }

                dispatch(actions.failure(err.response.data));
            }
        }
    }
}
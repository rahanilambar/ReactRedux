import * as actionTypes from '../constants/actionTypes';
import Axios from '../../Axios';

const fetchData = (data) => {
    return {
        type: actionTypes.FETCHDETAILS,
        data: data
    }
}

export const fetchdetails = () => {
    return dispatch => {
        Axios.get()
        .then(res => dispatch(fetchData(res.data)))
        .catch(err=> {
            console.log(err);
        })
    }
}

export const deletedetails = (id) => {
    return dispatch => {
        Axios.delete(`/${id}`)
        .then(res => dispatch(fetchdetails()))
        .catch(err => {
            console.log(err)
        })
    }
}

export const insertdetails = (payload) => {
    return dispatch => {
        Axios({
            method: 'POST',
            data: payload
        }).then(res => dispatch(fetchdetails()))
        .catch(err => {
            console.log(err)
        })
    }
}
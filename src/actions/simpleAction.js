/* 
  src/actions/simpleAction.js
*/
import axios from 'axios';
export const changeAction = (page) => {
  return dispatch => {
    axios.get(`http://jsonplaceholder.typicode.com/photos?_start=${page * 5 - 5}&_limit=5`)
      .then(res => {
        const data = res.data;
        dispatch({
          type: 'SIMPLE_ACTION',
          payload: data
        })
      })
  };
};
export const deleteAction = (params) => dispatch => {
  dispatch({
    type: 'DELETE_ACTION',
    payload: params
  })
}
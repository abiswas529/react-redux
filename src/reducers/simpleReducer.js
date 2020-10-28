/* 
  src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            }
        case 'DELETE_ACTION':
            return {
                result: state.result.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}
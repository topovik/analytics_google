const overviewReducer = (state = {data: []}, action) => {
    switch(action.type) {
        case 'FETCH_OVERVIEW_LOADING':
            return {...state, status: 'loading!'}
        
        case 'FETCH_OVERVIEW_LOADED':
            return {...state, data: action.data, status: 'loaded success!'}

        case 'FETCH_OVERVIEW_ERROR':
            return {...state, status: 'error!'}

        default:
            return state
    }
}

export default overviewReducer
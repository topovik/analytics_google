const activeUsers1DayReducer = (state = {dataActiveUsers1Day: []}, action) => {
    switch(action.type) {
        case 'FETCH_ACTIVE_USERS_1_DAY_LOADING':
            return {...state, status: 'loadingActiveUsers1Day!'}
    
        case 'FETCH_ACTIVE_USERS_1_DAY_LOADED':
            return {...state, dataActiveUsers1Day: action.dataActiveUsers1Day, status: 'loadedActiveUsers1Day success!'}

        case 'FETCH_ACTIVE_USERS_1_DAY_ERROR':
            return {...state, status: 'errorActiveUsers1Day!'}

        default:
            return state
    }
}

export default activeUsers1DayReducer
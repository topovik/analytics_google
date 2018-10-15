const activeUsers28DaysReducer = (state = {dataActiveUsers28Days: []}, action) => {
    switch(action.type) {
        case 'FETCH_ACTIVE_USERS_28_DAYS_LOADING':
            return {...state, status: 'loadingActiveUsers28Days!'}
    
        case 'FETCH_ACTIVE_USERS_28_DAYS_LOADED':
            return {...state, dataActiveUsers28Days: action.dataActiveUsers28Days, status: 'loadedActiveUsers28Days success!'}

        case 'FETCH_ACTIVE_USERS_28_DAYS_ERROR':
            return {...state, status: 'errorActiveUsers28Days!'}

        default:
            return state
    }
}

export default activeUsers28DaysReducer
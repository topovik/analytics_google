const activeUsers14DaysReducer = (state = {dataActiveUsers14Days: []}, action) => {
    switch(action.type) {
        case 'FETCH_ACTIVE_USERS_14_DAYS_LOADING':
            return {...state, status: 'loadingActiveUsers14Days!'}
    
        case 'FETCH_ACTIVE_USERS_14_DAYS_LOADED':
            return {...state, dataActiveUsers14Days: action.dataActiveUsers14Days, status: 'loadedActiveUsers14Days success!'}

        case 'FETCH_ACTIVE_USERS_14_DAYS_ERROR':
            return {...state, status: 'errorActiveUsers14Days!'}

        default:
            return state
    }
}

export default activeUsers14DaysReducer
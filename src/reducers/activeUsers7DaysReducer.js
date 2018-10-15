const activeUsers7DaysReducer = (state = {dataActiveUsers7Days: []}, action) => {
    switch(action.type) {
        case 'FETCH_ACTIVE_USERS_7_DAYS_LOADING':
            return {...state, status: 'loadingActiveUsers7Days!'}
    
        case 'FETCH_ACTIVE_USERS_7_DAYS_LOADED':
            return {...state, dataActiveUsers7Days: action.dataActiveUsers7Days, status: 'loadedActiveUsers7Days success!'}

        case 'FETCH_ACTIVE_USERS_7_DAYS_ERROR':
            return {...state, status: 'errorActiveUsers7Days!'}

        default:
            return state
    }
}

export default activeUsers7DaysReducer
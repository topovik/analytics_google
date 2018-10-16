const trafficAttractionCompaignReducer = (state = {dataTrafficAttractionCompaign: []}, action) => {
    switch(action.type) {
        case 'FETCH_TRAFFIC_ATTRACTION_COMPAIGN_LOADING':
            return {...state, status: 'loadingTrafficAttractionCompaign!'}
    
        case 'FETCH_TRAFFIC_ATTRACTION_COMPAIGN_LOADED':
            return {...state, dataTrafficAttractionCompaign: action.dataTrafficAttractionCompaign, status: 'loadedTrafficAttractionCompaign success!'}

        case 'FETCH_TRAFFIC_ATTRACTION_COMPAIGN_ERROR':
            return {...state, status: 'errorTrafficAttractionCompaign!'}

        default:
            return state
    }
}

export default trafficAttractionCompaignReducer
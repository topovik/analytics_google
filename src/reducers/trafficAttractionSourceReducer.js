const trafficAttractionSourceReducer = (state = {dataTrafficAttractionSource: []}, action) => {
    switch(action.type) {
        case 'FETCH_TRAFFIC_ATTRACTION_SOURCE_LOADING':
            return {...state, status: 'loadingTrafficAttractionSource!'}
    
        case 'FETCH_TRAFFIC_ATTRACTION_SOURCE_LOADED':
            return {...state, dataTrafficAttractionSource: action.dataTrafficAttractionSource, status: 'loadedTrafficAttractionSource success!'}

        case 'FETCH_TRAFFIC_ATTRACTION_SOURCE_ERROR':
            return {...state, status: 'errorTrafficAttractionSource!'}

        default:
            return state
    }
}

export default trafficAttractionSourceReducer
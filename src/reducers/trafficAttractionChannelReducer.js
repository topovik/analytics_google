const trafficAttractionChannelReducer = (state = {dataTrafficAttractionChannel: []}, action) => {
    switch(action.type) {
        case 'FETCH_TRAFFIC_ATTRACTION_CHANNEL_LOADING':
            return {...state, status: 'loadingTrafficAttractionChannel!'}
    
        case 'FETCH_TRAFFIC_ATTRACTION_CHANNEL_LOADED':
            return {...state, dataTrafficAttractionChannel: action.dataTrafficAttractionChannel, status: 'loadedTrafficAttractionChannel success!'}

        case 'FETCH_TRAFFIC_ATTRACTION_CHANNEL_ERROR':
            return {...state, status: 'errorTrafficAttractionChannel!'}

        default:
            return state
    }
}

export default trafficAttractionChannelReducer
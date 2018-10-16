import { combineReducers } from 'redux'
import overviewReducer from './overviewReducer'
import activeUsers1DayReducer from './activeUsers1DayReducer'
import activeUsers7DaysReducer from './activeUsers7DaysReducer'
import activeUsers14DaysReducer from './activeUsers14DaysReducer'
import activeUsers28DaysReducer from './activeUsers28DaysReducer'
import trafficAttractionChannelReducer from './trafficAttractionChannelReducer'
import trafficAttractionSourceReducer from './trafficAttractionSourceReducer'
import trafficAttractionCompaignReducer from './trafficAttractionCompaignReducer'

const reducer = combineReducers({
        overviewReducer, 
        activeUsers1DayReducer, 
        activeUsers7DaysReducer, 
        activeUsers14DaysReducer, 
        activeUsers28DaysReducer,
        trafficAttractionChannelReducer,
        trafficAttractionSourceReducer,
        trafficAttractionCompaignReducer
})

export default reducer
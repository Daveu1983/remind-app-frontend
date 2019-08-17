import countItems, * as fromCountItems from './count-items'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    countItems
})

export const getNumberOfLiveItems = (state) => fromCountItems.getNumberOfLiveItems(state.countItems);

export default allReducers
import countItems, * as fromCountItems from './count-items'
import addItem from './add-item'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    countItems,
    addItem
})

export const getNumberOfLiveItems = (state) => fromCountItems.getNumberOfLiveItems(state.countItems);

export default allReducers
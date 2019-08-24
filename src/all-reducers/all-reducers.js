import countItems, * as fromCountItems from './count-items'
import addItem from './add-item'
import editItem from './edit-item'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    countItems,
    addItem,
    editItem
})

export const getNumberOfLiveItems = (state) => fromCountItems.getNumberOfLiveItems(state.countItems);

export default allReducers
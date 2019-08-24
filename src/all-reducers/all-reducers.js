import countItems, * as fromCountItems from './count-items'
import addItem from './add-item'
import editItem from './edit-item'
import countUsers from './users'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    countItems,
    addItem,
    editItem,
    countUsers
})

export const getNumberOfLiveItems = (state) => fromCountItems.getNumberOfLiveItems(state.countItems);

export default allReducers

import { GET_DATA_ITEM, SET_ACTIVE } from '../types'

const initStore = {
    dataItems: [],
    active: false
}

export default function reducer(store = initStore, action) {
    switch (action.type) {
        case GET_DATA_ITEM:
            return {
                ...store,
                dataItems: [action.dataItems]
                // ...action
            }
        case SET_ACTIVE:
            return {
                ...store,
                active: action.active
            }
        default:
            return store
    }

}

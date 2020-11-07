import { GET_DATA_ITEM } from '../types'

export const setDataItems = dataItems => ({
    type: GET_DATA_ITEM,
    dataItems
})
import {combineReducers} from 'redux'
import productosreducer from './productosreducer'

export default combineReducers({
    productos:productosreducer
})
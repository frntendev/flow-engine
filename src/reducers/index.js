import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rules from './ruleReducer'

export default combineReducers({
    router: routerReducer,
    rules,
})
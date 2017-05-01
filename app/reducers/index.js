/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 24/04/2017
 * Time: 9:25
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import locations from './locations'
import categories from './categories'


const rootReducer = combineReducers({
    locations,
    categories,
    routing: routerReducer
})


export default rootReducer
/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 24/04/2017
 * Time: 9:19
 */
import {createStore, applyMiddleware} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux'
import rootReducer from '../reducers'
import {loadState, saveState} from './localStorage'

const persistedState = loadState()

const RouterMiddlewear = routerMiddleware(browserHistory)

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, RouterMiddlewear)(createStore);


var initialState = {
    locations: {
        selectedLocation: null,
        sort: "alphabet",
        category: "all"
    },
    categories: {
        selectedCategory: null
    }

}

const store = createStoreWithMiddleware(rootReducer, persistedState, window.devToolsExtension && window.devToolsExtension());
export const history = syncHistoryWithStore(browserHistory, store)

store.subscribe(() => {
    const state = store.getState()
    saveState({
        locations: {
            ...initialState.locations,
            locations: state.locations.locations
        },
        categories: {
            ...initialState.categories,
            categories: state.categories.categories
        }
    })
})

export default store

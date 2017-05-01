/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 24/04/2017
 * Time: 9:31
 */
import * as types from '../constants/actionTypes'

const defaultState = {
    categories:[
        {name:"Restaurants"},
        {name:"Bars"},
        {name:"Museums"},
        {name:"Parks"}
    ],
    selectedCategory: null
}


function categories(state = defaultState, action) {
    switch (action.type) {

        case types.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.selectedCategory
            }

        case types.CREATE_CATEGORY:
            return {
                ...state,
               categories: [
                   action.category, ...state.categories
               ]
            }

        case types.UPDATE_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories.slice(0, action.index),
                    action.category,
                    ...state.categories.slice(action.index + 1),
                ]
            }

        case types.DELETE_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories.slice(0, action.index),
                    ...state.categories.slice(action.index + 1),
                ]
            }
        default:
            return state
    }
}

export default categories
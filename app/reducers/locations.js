/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 24/04/2017
 * Time: 9:31
 */
import * as types from '../constants/actionTypes'
import LocationsList from '../data/locations'

const defaultState = {
    locations: LocationsList,
    selectedLocation: null,
    sort: "alphabet",
    category: "all"
}

function locations(state = defaultState, action) {
    switch (action.type) {

        case types.SELECT_LOCATION:
            return {
                ...state,
                selectedLocation: action.selectedLocation
            }

        case types.CREATE_LOCATION:
            return {
                ...state,
                locations: [
                    action.location, ...state.locations
                ]
            }

        case types.UPDATE_LOCATION:
            return {
                ...state,
                locations: [
                    ...state.locations.slice(0, action.index),
                    action.location,
                    ...state.locations.slice(action.index + 1),
                ]
            }

        case types.DELETE_LOCATION:
            return {
                ...state,
                locations: [
                    ...state.locations.slice(0, action.index),
                    ...state.locations.slice(action.index + 1),
                ]
            }

        case types.SORT_LOCATIONS:
            return {
                ...state,
                locations: action.locations,
                sort: action.sort
            }

        case types.SET_CATEOGRY_FILTER:
            return {
                ...state,
                category: action.category
            }

        default:
            return state
    }
}

export default locations

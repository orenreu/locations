/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 24/04/2017
 * Time: 9:31
 */
import * as types from '../constants/actionTypes'
import store from '../store/configureStore'

// =========================================================================
// SELECT/UNSELECT LOCATION==========================================================
// =========================================================================
export function selectLocation(selectedLocation) {
    const state = store.getState()
    if(selectedLocation === state.locations.selectedLocation){
        selectedLocation = null
    }
    return {
        type: types.SELECT_LOCATION,
        selectedLocation
    }
}


// =========================================================================
// CREATE LOCATION==========================================================
// =========================================================================
export function createLocation(location) {
    return {
        type: types.CREATE_LOCATION,
        location
    }
}

// =========================================================================
// UPDATE LOCATION==========================================================
// =========================================================================
export function updateLocation(location, index) {
    return {
        type: types.UPDATE_LOCATION,
        location,
        index
    }
}

// =========================================================================
// DELETE LOCATION==========================================================
// =========================================================================
export function deleteLocation(index) {
    return {
        type: types.DELETE_LOCATION,
        index
    }
}

// =========================================================================
// SORT LOCATIONS ALPHABETICALLY============================================
// =========================================================================
export function sortLocationsAlphabetically() {
    const state = store.getState()
    var locations = state.locations.locations

    locations.sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase()
    })

    return {
        type: types.SORT_LOCATIONS,
        locations,
        sort: 'alphabet'
    }
}

// =========================================================================
// SORT LOCATIONS BY CATEGORY===============================================
// =========================================================================
export function sortLocationsByCategory() {
    const state = store.getState()
    var locations = state.locations.locations

    locations.sort((a, b) => {
        return a.category.toLowerCase() > b.category.toLowerCase()
    })

    return {
        type: types.SORT_LOCATIONS,
        locations,
        sort: 'category'
    }
}


// =========================================================================
// SET CATEGORY FILTER======================================================
// =========================================================================
export function setCategoryFilter(category) {
    return {
        type: types.SET_CATEOGRY_FILTER,
        category,
    }
}
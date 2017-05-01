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
// SELECT/UNSELECT CATEGORY==========================================================
// =========================================================================
export function selectCategory(selectedCategory) {
    const state = store.getState()
    if(selectedCategory === state.categories.selectedCategory){
        selectedCategory = null
    }
    return {
        type: types.SELECT_CATEGORY,
        selectedCategory
    }
}


// =========================================================================
// CREATE CATEGORY==========================================================
// =========================================================================
export function createCategory(category) {
    return {
        type: types.CREATE_CATEGORY,
        category
    }
}

// =========================================================================
// UPDATE CATEGORY==========================================================
// =========================================================================
export function updateCategory(category, index) {
    return {
        type: types.UPDATE_CATEGORY,
        category,
        index
    }
}

// =========================================================================
// DELETE CATEGORY==========================================================
// =========================================================================
export function deleteCategory(index) {
    return {
        type: types.DELETE_CATEGORY,
        index
    }
}
import Immutable from 'immutable';
import LibraryForm from 'library-form';

import Constants from './Constants'

class StoreHelper extends LibraryForm.Field.StoreHelper {
    getInitialState() {
        return Immutable.Map({
            'id':               this.fieldId,
            'file':             null,
            'value':            '',
            'error':            '',
            'name':             '',
            'message':          '',
            'isShow':           false,
            'isBlockPhoto':     false,
            'photos':           [

            ]
        })
    }
    reduceFieldClearValue(state) {
        return state.set('value', '')
    }
    reduceFieldChangeValue(state, value) {
        return state.set('value', value)
    }
    reduce(state, action) {
        if (action.fieldId == this.fieldId) {
            switch (action.subtype) {
                case 'field-load':
                    state = state.set('isBlockPhoto', true)
                    return state
                case 'show-modal':
                    state = state.set('isShow', action.isShow)
                    return state
                case 'get-url-image':
                    state = state.set('isShow', false)
                    state = state.set('value', action.urlImage)
                    return state
                case 'file-change':
                    state = state.set('file', action.file)
                    return state
                case 'change-search':
                    state = state.set('name', action.value)
                    return state
                case 'submit-fail':
                    state = state.set('message', action.message)
                    state = state.set('isBlockPhoto', false)
                    return state
                case 'load-success':
                    state = state.set('photos', action.data)
                    state = state.set('message', '')
                    state = state.set('isBlockPhoto', false)
                    return state
                default:
                    state = super.reduce(state, action)
            }
        }
        state = super.reduce(state, action)
        return state
    }

}

export default StoreHelper;

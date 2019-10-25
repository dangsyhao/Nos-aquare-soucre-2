import Immutable from 'immutable';
import LibraryForm from 'library-form';

import Constants from './Constants'

class StoreHelper extends LibraryForm.Field.StoreHelper {
    getInitialState() {
        return Immutable.Map({
            'id':       this.fieldId,
            'value':    Immutable.List([]),
            'error':    ''
        })
    }
    reduceFieldClearValue(state) {
        return state.set('value', Immutable.List([]))
    }
    reduceFieldChangeValue(state, value) {
        return state.set('value', Immutable.List(value))
    }
    reduce(state, action) {
        if (action.fieldId == this.fieldId) {
            switch (action.subtype) {
                default:
                    state = super.reduce(state, action)
            }
        }
        return state
    }

}

export default StoreHelper;

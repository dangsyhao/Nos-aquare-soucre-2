import Immutable from 'immutable';
import Constants from './Constants';

class StoreHelper {
    constructor(formId, fieldId) {
        this.formId = formId;
        this.fieldId = fieldId;
    }

    getInitialState() {
        return Immutable.Map({
            'id':       this.fieldId,
            'value':    '',
            'error':    ''
        })
    }

    reduce(state, action) {
        if (action.fieldId == this.fieldId) {
            switch (action.subtype) {
                case Constants.ACTION_FIELD_CHANGE_VALUE:
                    return this.reduceFieldChangeValue(state, action.value)
                case Constants.ACTION_FIELD_CLEAR_VALUE:
                    return this.reduceFieldClearValue(state)
                case Constants.ACTION_FIELD_HAS_ERROR:
                    return this.reduceFieldHasError(state, action.error)
                case Constants.ACTION_FIELD_CLEAR_ERROR:
                    return this.reduceFieldClearError(state)
            }
        }
        return state;
    }
    reduceFieldClearValue(state) {
        return state.set('value', '')
    }
    reduceFieldHasError(state, error) {
        return state.set('error', error)
    }
    reduceFieldChangeValue(state, value) {
        return state.set('value', value)
    }
    reduceFieldClearError(state) {
        return state.set('error', '')
    }
}
export default StoreHelper;

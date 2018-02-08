import Immutable from 'immutable';
import _StoreHelper from './../../field/StoreHelper'
import Constants from './Constants'

class StoreHelper extends _StoreHelper {
    getInitialState() {
        return Immutable.Map({
            'id':       this.fieldId,
            'value':    '',
            'error':    '',
            'choices':  []
        })
    }
    reduce(state, action) {
        if (action.fieldId == this.fieldId) {
            switch (action.subtype) {
                case Constants.ACTION_SELECT_SET_CHOICES:
                    state = state.set('choices', action.choices)
                    return state
                default:
                    state = super.reduce(state, action)
            }
        }

        return state
    }
}

export default StoreHelper;

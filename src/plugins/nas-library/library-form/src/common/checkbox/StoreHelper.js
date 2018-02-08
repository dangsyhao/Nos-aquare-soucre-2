import Immutable from 'immutable';
import _StoreHelper from './../../field/StoreHelper'

class StoreHelper extends _StoreHelper {
    getInitialState() {
        return Immutable.Map({
            'id':       this.fieldId,
            'value':    false,
            'error':    ''
        })
    }
    reduceFieldClearValue(state) {
        return state.set('value', false)
    }

}

export default StoreHelper;

import Immutable from 'immutable';
import _ActionHelper from './../../field/ActionHelper'
import Constants from './Constants'

class ActionHelper extends _ActionHelper {
    dispatchSetChoices(choices) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        Constants.ACTION_MULTISELECT_SET_CHOICES,
            choices:        choices
        })
    }

}

export default ActionHelper;

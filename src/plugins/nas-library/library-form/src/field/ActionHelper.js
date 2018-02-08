
import Constants from './Constants';

class ActionHelper {
    constructor(dispatcher, formId, fieldId) {
        this.dispatcher = dispatcher
        this.formId = formId
        this.fieldId = fieldId
    }

    // Core functions
    getValue(fieldProps) {
        return fieldProps.get('value')
    }

    // Dispatcher
    dispatchChangeValue(value) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        Constants.ACTION_FIELD_CHANGE_VALUE,
            value:          value
        })
    }
    dispatchHasError(error) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        Constants.ACTION_FIELD_HAS_ERROR,
            error:          error
        })
    }
    dispatchClearValue() {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        Constants.ACTION_FIELD_CLEAR_VALUE
        })
    }
    dispatchClearError() {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        Constants.ACTION_FIELD_CLEAR_ERROR
        })
    }
}

export default ActionHelper;

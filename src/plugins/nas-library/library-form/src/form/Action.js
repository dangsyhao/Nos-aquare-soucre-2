
import Constants from './Constants'

class Action {
    constructor(dispatcher, id='form') {
        this.dispatcher = dispatcher;
        this.formId = id;
    }

    initActionHelpers() {

    }
    getActionHelpers() {
        if (this._actionHelpers == undefined) {
            this.initActionHelpers()
        }
        return this._actionHelpers;
    }

    helper(fieldId) {
        if (this._actionHelpers == undefined) {
            this.initActionHelpers()
        }
        return this._actionHelpers[fieldId];
    }

    // Core actions
    load() {
    }
    changeValue(fieldId, newValue) {
        this.helper(fieldId).dispatchChangeValue(newValue)
    }
    clear() {
        for (var fieldId in this.getActionHelpers()) {
            this.helper(fieldId).dispatchClearError()
        }
        this.dispatchFormClearMessages()
    }
    getValues(form) {
        var values = {}
        for (var fieldId in this.getActionHelpers()) {
            values[fieldId] = this.helper(fieldId).getValue(form.get('fields').get(fieldId))
        }
        return values;
    }
    submit() {

    }

    // Dispatcher
    dispatchFormLoadStart() {
        this.dispatcher.dispatch({
            formId:        this.formId,
            type:          Constants.ACTION_FORM_LOAD_START
        })
    }
    dispatchFormLoadFail(errors) {
        this.dispatcher.dispatch({
            formId:        this.formId,
            type:          Constants.ACTION_FORM_LOAD_FAIL,
            errors:        errors
        })
    }
    dispatchFormLoadSuccess() {
        this.dispatcher.dispatch({
            formId:        this.formId,
            type:          Constants.ACTION_FORM_LOAD_SUCCESS
        })
    }
    dispatchFormAddMessage(messageType, message) {
        this.dispatcher.dispatch({
            formId:        this.formId,
            type:          Constants.ACTION_FORM_ADD_MESSAGE,
            messageType:   messageType,
            message:       message
        })
    }
    dispatchFormClearMessages() {
        this.dispatcher.dispatch({
            formId:        this.formId,
            type:          Constants.ACTION_FORM_CLEAR_MESSAGES
        })
    }
    dispatchFormSubmitSuccess(values) {
        this.dispatcher.dispatch({
            formId:        this.formId,
            type:          Constants.ACTION_FORM_SUBMIT_SUCCESS,
            values:        values
        })
    }
    dispatchFormSubmitFail(errors) {
      this.dispatcher.dispatch({
          formId:        this.formId,
          type:          Constants.ACTION_FORM_SUBMIT_FAIL,
          errors:        errors
      })
    }
    dispatch(payload) {
        this.dispatcher.dispatch(payload)
    }
}

export default Action;

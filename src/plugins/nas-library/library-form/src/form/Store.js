import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

import Constants from './Constants';
import FieldConstants from './../field/Constants';

class Store extends ReduceStore {
    constructor(dispatcher, id='form') {
        super(dispatcher);
        this.dispatcher = dispatcher;
        this.id = id;
    }
    initStoreHelpers() {

    }
    getStoreHelpers() {
        if (this._storeHelpers == undefined) {
            this.initStoreHelpers();
        }
        return this._storeHelpers
    }
    helper(fieldId) {
        if (this._storeHelpers == undefined) {
            this.initStoreHelpers();
        }
        return this._storeHelpers[fieldId]
    }
    getInitialState() {
        var fields = {}
        for (var id in this.getStoreHelpers()) {
            fields[id] = this.helper(id).getInitialState()
        }

        return Immutable.Map({
            'id':                this.id,
            'title':             'Form',
            'isBlocked':         false,
            'formLoadStatus':    Constants.FORM_LOAD_STATUS_NOT_READY,
            'messages':          Immutable.List([]),
            'fields':            Immutable.Map(fields)
        })
    }

    reduce(state, action) {
        if (action.formId == this.id) {
            switch (action.type) {
                case Constants.ACTION_FORM_LOAD_START:
                    return this.reduceFormLoadStart(state)
                case Constants.ACTION_FORM_LOAD_FAIL:
                    return this.reduceFormLoadFail(state, action.errors)
                case Constants.ACTION_FORM_LOAD_SUCCESS:
                    return this.reduceFormLoadSuccess(state)
                case Constants.ACTION_FORM_SUBMIT_START:
                    return this.reduceFormSubmitStart(state)
                case Constants.ACTION_FORM_SUBMIT_FAIL:
                    return this.reduceFormSubmitFail(state, action.errors)
                case Constants.ACTION_FORM_SUBMIT_SUCCESS:
                    return this.reduceFormSubmitSuccess(state, action.values)
                case Constants.ACTION_FORM_ADD_MESSAGE:
                    return this.reduceFormAddMessage(state, action.messageType, action.message)
                case Constants.ACTION_FORM_CLEAR_MESSAGES:
                    return this.reduceFormClearMessages(state)
                case Constants.ACTION_FIELD_ACTION:
                    return this.reduceFieldAction(state, action.fieldId, action)
            }
        }
        return state;
    }

    reduceFormLoadStart(state) {
        state = state.set('isBlocked', true);
        state = state.set('formLoadStatus', Constants.FORM_LOAD_STATUS_NOT_READY)
        return state;
    }
    reduceFormLoadFail(state, errors) {
        state = state.set('isBlocked', false)
        state = state.set('formLoadStatus', Constants.FORM_LOAD_STATUS_ERROR)
        return state;
    }
    reduceFormLoadSuccess(state) {
        state = state.set('isBlocked', false)
        state = state.set('formLoadStatus', Constants.FORM_LOAD_STATUS_READY)
        return state;
    }
    reduceFormSubmitStart(state) {
        state = state.set('isBlocked', true)
        return state;
    }
    reduceFormSubmitFail(state, errors) {
        state = state.set('isBlocked', false)
        return state;
    }
    reduceFormSubmitSuccess(state, values) {
        state = state.set('isBlocked', false)
        return state;
    }
    reduceFormAddMessage(state, messageType, message) {
        var messages = state.get('messages');
        messages = messages.push({'type': messageType, 'message': message});
        state = state.set('messages', messages);
        return state;
    }
    reduceFormClearMessages(state) {
        state = state.set('messages', Immutable.List([]))
        return state;
    }
    reduceFieldAction(state, fieldId, action) {
        var fields = state.get('fields')

        var fieldState = fields.get(fieldId)
        fieldState = this.helper(fieldId).reduce(fieldState, action)
        fields = fields.set(fieldId, fieldState)
        state = state.set('fields', fields)
        return state;
    }
}

export default Store;

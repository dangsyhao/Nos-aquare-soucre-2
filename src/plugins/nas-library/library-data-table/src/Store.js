import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Constants from './Constants';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'data-table') {
        super(dispatcher);
        this.dispatcher = dispatcher;
        this.id = id;
    }
    getInitialState() {
        return Immutable.Map({
            'id':                this.id,
            'title':             'Data Table',
            'records':           Immutable.List([]),
            'totalRecords':      0,
            'recordPerPage':     50,
            'currentPage':       1,
            'sortCode':          'id',
            'sortDir':           'desc',
            'filters':           Immutable.Map({}),
            'isReady':           false,
            'dataStatus':        Constants.DATA_STATUS_INVALID,
            'messages':          Immutable.List([]),
        });
    }
    reduceLoadRecordsStart(state, params) {
        state = state.set('isReady', false);
        state = state.set('dataStatus', Constants.DATA_STATUS_LOADING);
        return state;
    }
    reduceLoadRecordsSuccess(state, records, total_records) {
        state = state.set('isReady', true);
        state = state.set('dataStatus', Constants.DATA_STATUS_LOADED);
        state = state.set('records', Immutable.List(records));
        state = state.set('totalRecords', total_records)
        return state;
    }
    reduceLoadRecordsFail(state, errorMessage) {
        state = state.set('isReady', true);
        state = state.set('dataStatus', Constants.DATA_STATUS_FAILED);
        state = this.addMessage(state, 'error', errorMessage);
        return state;
    }
    reduceAddMessage(state, type, message) {
        return this.addMessage(state, type, message);
    }
    reduceClearMessages(state) {
        state = state.set('messages', Immutable.List([]))
        return state;
    }
    reduceChangePage(state, pageNumber) {
        state = state.set('currentPage', pageNumber);
        state = state.set('dataStatus', Constants.DATA_STATUS_INVALID);
        return state;
    }
    reduceChangeSort(state, sortCode, sortDir) {
        state = state.set('sortCode', sortCode);
        state = state.set('sortDir', sortDir);
        state = state.set('dataStatus', Constants.DATA_STATUS_INVALID);
        return state;
    }
    reduceChangeFilters(state, filters) {
        var currentFilters = state.get('filters');
        for (var key in filters) {
            currentFilters = currentFilters.set(key, filters[key]);
        }
        state = state.set('filters', currentFilters);
        state = state.set('dataStatus', Constants.DATA_STATUS_INVALID);
        return state;
    }
    clearMessages(state) {
        state = state.set('messages', Immutable.List([]))
        return state;
    }
    addMessage(state, type, message) {
        var messages = state.get('messages');
        messages = messages.push({'type': type, 'message': message})
        state = state.set('messages', messages);
        return state;
    }
    reduce(state, action) {
        var id = this.id;
        switch (action.type) {
            case id + '/' + Constants.ACTION_LOAD_RECORDS_START:
                return this.reduceLoadRecordsStart(state, action.params);
            case id + '/' + Constants.ACTION_LOAD_RECORDS_SUCCESS:
                return this.reduceLoadRecordsSuccess(state, action.records, action.totalRecords);
            case id + '/' + Constants.ACTION_LOAD_RECORDS_FAIL:
                return this.reduceLoadRecordsFail(state, action.errorMessage);
            case id + '/' + Constants.ACTION_ADD_MESSAGE:
                return this.reduceAddMessage(state, action.messageType, action.message);
            case id + '/' + Constants.ACTION_CLEAR_MESSAGES:
                return this.reduceClearMessages(state);
            case id + '/' + Constants.ACTION_CHANGE_PAGE:
                return this.reduceChangePage(state, action.pageNumber);
            case id + '/' + Constants.ACTION_CHANGE_SORT:
                return this.reduceChangeSort(state, action.sortCode, action.sortDir);
            case id + '/' + Constants.ACTION_CHANGE_FILTERS:
                return this.reduceChangeFilters(state, action.filters);
        }
        return state;
    }
}

export default Store;

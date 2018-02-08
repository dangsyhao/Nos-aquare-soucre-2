
import Constants from './Constants';

class Action {
    constructor(dispatcher, id) {
        this.dispatcher = dispatcher;
        this.id = id;
    }

    // Core actions
    loadRecords(dataTable) {
        this.dispatchLoadRecordsSuccess([], 0)
    }
    changePage(dataTable, pageNumber) {
        this.dispatchChangePage(pageNumber);
    }

    // Utility actions
    extractTableParams() {

    }

    // Dispatch
    dispatchLoadRecordsStart(params) {
        this.dispatcher.dispatch({
            type:          this.id + '/' + Constants.ACTION_LOAD_RECORDS_START,
            params:        params
        })
    }
    dispatchLoadRecordsSuccess(records, totalRecords) {
        this.dispatcher.dispatch({
            type:             this.id + '/' + Constants.ACTION_LOAD_RECORDS_SUCCESS,
            records:          records,
            totalRecords:     totalRecords
        })
    }
    dispatchLoadRecordsFail(errorMessage) {
        this.dispatcher.dispatch({
            type:             this.id + '/' + Constants.ACTION_LOAD_RECORDS_FAIL,
            errorMessage:     errorMessage
        })
    }
    dispatchAddMessage(type, message) {
        this.dispatcher.dispatch({
            type:             this.id + '/' + Constants.ACTION_ADD_MESSAGE,
            messageType:      type,
            message:          message
        })
    }
    dispatchClearMessage() {
        this.dispatcher.dispatch({
            type:             this.id + '/' + Constants.ACTION_CLEAR_MESSAGES
        })
    }
    dispatchChangePage(pageNumber) {
        this.dispatcher.dispatch({
            type:             this.id + '/' + Constants.ACTION_CHANGE_PAGE,
            pageNumber:       pageNumber
        })
    }
    dispatchChangeSort(sortCode, sortDir) {
        this.dispatcher.dispatch({
            type:             this.id + '/' + Constants.ACTION_CHANGE_SORT,
            sortCode:         sortCode,
            sortDir:          sortDir
        })
    }
    dispatchChangeFilters(filters) {
        this.dispatcher.dispatch({
            type:             this.id + '/' + Constants.ACTION_CHANGE_FILTERS,
            filters:          filters
        })
    }
}
export default Action;

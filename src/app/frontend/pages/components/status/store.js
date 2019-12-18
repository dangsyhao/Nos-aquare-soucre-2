import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

class Store extends ReduceStore {

    constructor(_dispatcher,id="call_status_action") {
        super();
       this._dispatcher = _dispatcher;
       this.id = id;
    }

    getInitialState() {
        return Immutable.Map({
            'status': 'Chưa Cập Nhật Satus',
        })
    }

    getStatus () {
        return this.status;
    }

    emitChange() {
        this.emit('change');
    }

    addChangeListener(calback){
        this.on('change',calback)
    }

    removeChangeListener(calback){
        this.removeListener('change',calback);
    }

    reduce(state,action){
        switch (action.actionType) {
            case this.id:
                state = state.set('status', action.text);
                this.emitChange();
                return state
        }

        return state;

    }

}

export default Store;

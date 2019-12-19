import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';

class Store extends ReduceStore {

    constructor(dispatcher,id="call_status_action") {
       super(dispatcher);
       this.dispatcher = dispatcher;
       this.id = id;
    }

    getInitialState() {
        return Immutable.Map({
            'status': 'Chưa Cập Nhật Satus !',
        })
    }

    reduce(state,action){
        switch (action.actionType) {
            case this.id:
                state = state.set('status', action.text);
        }
        return state;
    }

}

export default Store;

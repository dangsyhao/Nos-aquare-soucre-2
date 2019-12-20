import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'what-is-web-application') {
        super(dispatcher);
        this.dispatcher = dispatcher;
        this.id = id;
    }

    getInitialState() {
        return Immutable.Map({
            'jobs_data':[]
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id:
                state = state.set('jobs_data',action.jobs_data);
                return state
        }
        return state;
    }
}

export default Store;

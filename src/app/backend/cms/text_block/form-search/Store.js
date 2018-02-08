import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'form-search') {
        super(dispatcher);
        this.id = id;
    }

    getInitialState() {
        return Immutable.Map({
            filter: Immutable.Map({})
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/change-value':
                var filter = state.get('filter');
                filter = filter.set(action.event.target.name, action.event.target.value);
                state = state.set('filter', filter);
                return state;
        }
        return state;
    }
}

export default Store;

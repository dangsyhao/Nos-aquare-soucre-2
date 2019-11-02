import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'container') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'applicationTitle': 'Not A Box CMS',
        })
    }

    reduce(state, action) {
        switch (action.type) {
        }
        return state;
    }
}

export default Store;

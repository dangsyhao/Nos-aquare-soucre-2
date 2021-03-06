import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'what-is-web-application') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'menuId': 'project_modularisation',
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/set-selected-menu':
                state = state.set('menuId', action.menuId)
                return state
        }
        return state;
    }
}

export default Store;

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
            'applicationTitle':    'Not A Box CMS',
            'menuId':              '',
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

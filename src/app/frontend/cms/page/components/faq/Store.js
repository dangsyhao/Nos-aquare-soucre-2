import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'faq') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'background':          '',
            'paddingTop':          '',
            'paddingBottom':       '',

            'list':                [],
            'index':               0
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/load':
                state = state.set('background', action.parameters.background)
                state = state.set('paddingTop', action.parameters.paddingTop)
                state = state.set('paddingBottom', action.parameters.paddingBottom)

                state = state.set('list', action.parameters.list)
                return state
            case this.id + '/scroll-box':
                state = state.set('index', action.index)
                return state
        }
        return state;
    }
}

export default Store;

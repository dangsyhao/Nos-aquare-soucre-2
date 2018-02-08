import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'horizontal-step') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'background':      '',
            'paddingBottom':   '',
            'paddingTop':      '',
            'offset':          '',
            'span':            '',

            'title':          '',
            'steps':          Immutable.List([]),
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/load':
                state = state.set('background', action.parameters.background)
                state = state.set('paddingBottom', action.parameters.paddingBottom)
                state = state.set('paddingTop', action.parameters.paddingTop)
                state = state.set('offset', action.parameters.offset)
                state = state.set('span', action.parameters.span)

                state = state.set('title', action.parameters.title)
                state = state.set('steps', Immutable.List(action.parameters.steps))
                return state
        }
        return state;
    }
}

export default Store;

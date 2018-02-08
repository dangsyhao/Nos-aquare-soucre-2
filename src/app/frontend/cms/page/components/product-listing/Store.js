import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'product-listing') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'isBlocking':       false,
            'background':      '',
            'paddingBottom':   '',
            'paddingTop':      '',
            'offset':          '',
            'span':            '',

            'title':            '',
            'products':         Immutable.List([
            ])
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
                return state

            case this.id + '/set-message':
                state = state.set('message', action.message)
                return state;
            case this.id + '/load-start':
                return state;
            case this.id + '/load-success':
                state = state.set('products', Immutable.List(action.records))
                return state
            case this.id + '/load-fail':
                return state
            case this.id + '/block-ui':
                state = state.set('isBlocking', action.isBlock)
                return state
        }
        return state;
    }
}

export default Store;

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'ultimate-bundle') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'isBlocking':          false,
            'background':          '',
            'paddingTop':          '',
            'paddingBottom':       '',
            'offset':              '',
            'span':                '',
            'layout':              '',

            'images':              [],
            'text':      '',
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/load':
                state = state.set('background', action.parameters.background)
                state = state.set('paddingTop', action.parameters.paddingTop)
                state = state.set('paddingBottom', action.parameters.paddingBottom)
                state = state.set('offset', action.parameters.offset)
                state = state.set('span', action.parameters.span)
                state = state.set('layout', action.parameters.layout)

                state = state.set('text', action.parameters.text)
                state = state.set('images', action.parameters.images)

                return state
            case this.id + '/block-ui':
                state = state.set('isBlocking', action.isBlock)
                return state

        }
        return state;
    }
}

export default Store;

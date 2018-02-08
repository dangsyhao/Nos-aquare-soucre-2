import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'testimonial') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'index':           0,
            'background':      '',
            'paddingTop':      '',
            'paddingBottom':   '',
            'offset':          '',
            'span':            '',

            'testimonials':    Immutable.List([])
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/next-slide':
                state = state.set('index', action.index);
                return state
            case this.id + '/load':
                state = state.set('background', action.parameters.background)
                state = state.set('paddingTop', action.parameters.paddingTop)
                state = state.set('paddingBottom', action.parameters.paddingBottom)
                state = state.set('offset', action.parameters.offset)
                state = state.set('span', action.parameters.span)
                state = state.set('testimonials', Immutable.List(action.parameters.testimonials))
                return state

        }
        return state;
    }
}

export default Store;

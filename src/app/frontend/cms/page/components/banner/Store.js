import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'banner') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'background':      '',
            'height':          '',
            'paddingTop':      '',
            'paddingBottom':   '',
            'offset':          '',
            'span':            '',

            'title':           '',
            'subtitle':        '',
            'button1Text':     '',
            'button1Url':      '',
            'button2Text':     '',
            'button2Url':      '',
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/load':
                state = state.set('background', action.parameters.background)
                state = state.set('height', action.parameters.height)
                state = state.set('paddingTop', action.parameters.paddingTop)
                state = state.set('paddingBottom', action.parameters.paddingBottom)
                state = state.set('offset', action.parameters.offset)
                state = state.set('span', action.parameters.span)

                state = state.set('title', action.parameters.title)
                state = state.set('subtitle', action.parameters.subtitle)
                state = state.set('button1Text', action.parameters.button1Text)
                state = state.set('button1Url', action.parameters.button1Url)
                state = state.set('button2Text', action.parameters.button2Text)
                state = state.set('button2Url', action.parameters.button2Url)
                return state
        }
        return state;
    }
}

export default Store;

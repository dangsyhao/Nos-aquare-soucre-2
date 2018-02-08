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

            'title':               'Title',
            'images':              [],
            'buttonText':          'Button Text',
            'buttonLink':          '',
            'list':                [],
            'ecwidProductId':      '',
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/load':
                state = state.set('background', action.parameters.background)
                state = state.set('paddingTop', action.parameters.paddingTop)
                state = state.set('paddingBottom', action.parameters.paddingBottom)

                state = state.set('title', action.parameters.title)
                state = state.set('images', action.parameters.images)
                state = state.set('list', action.parameters.list)
                state = state.set('buttonText', action.parameters.buttonText)
                state = state.set('buttonLink', action.parameters.buttonLink)

                state = state.set('ecwidProductId', action.parameters.ecwidProductId)
                return state
            case this.id + '/block-ui':
                state = state.set('isBlocking', action.isBlock)
                return state

        }
        return state;
    }
}

export default Store;

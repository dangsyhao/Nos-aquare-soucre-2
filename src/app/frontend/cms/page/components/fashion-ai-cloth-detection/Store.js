import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

import Constants from './Constants';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'landmark-upper') {
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

            'isBlocking':       false,
            'imageBase64':      '',
            'error':            '',
            'landmarks':        Immutable.Map({}),
            'testImages':       Immutable.List([
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
                return state            
            case this.id + '/change-file':
                state = state.set('isBlocking', true);
                state = state.set('imageBase64', action.imageBase64)
                return state
            case this.id + '/success':
                state = state.set('isBlocking', false);
                state = state.set('landmarks', Immutable.Map(action.landmarks))
                return state
            case this.id + '/failed':
                state = state.set('isBlocking', false);
                state = state.set('error', action.error)
                return state
            case this.id + '/add-test-image':
                var testImages = state.get('testImages')
                state = state.update('testImages', testImages => testImages.push({'base64': action.imageBase64}))
                return state
        }
        return state;
    }
}

export default Store;

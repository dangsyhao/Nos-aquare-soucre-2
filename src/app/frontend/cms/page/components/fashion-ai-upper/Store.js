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
            'result':           '',
            'landmarks':        Immutable.Map({
                'x0':              0,
                'y0':              0,
                'x1':              0,
                'y1':              0,
                'x2':              0,
                'y2':              0,
                'x3':              0,
                'y3':              0,
                'x4':              0,
                'y4':              0,
                'x5':              0,
                'y5':              0,
            }),
            'bounding_box':     Immutable.Map({
                'T':               0,
                'L':               0,
                'R':               0,
                'B':               0,
            }),
            'image':            Immutable.Map({
                'width':           0,
                'height':          0,
            }),
            'attributes':       Immutable.List([]),
            'attention':        Immutable.List([]),
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
                state = state.set('error', '');
                state = state.set('imageBase64', action.imageBase64)
                return state
            case this.id + '/success':
                state = state.set('isBlocking', false);
                state = state.set('attributes', Immutable.List(action.result.attributes))
                state = state.set('landmarks', Immutable.Map(action.result.landmarks))
                state = state.set('bounding_box', Immutable.Map(action.result.bounding_box))
                state = state.set('image', Immutable.Map(action.result.image))
                state = state.set('attention', Immutable.List([]))
                return state
            case this.id + '/failed':
                state = state.set('isBlocking', false);
                state = state.set('error', action.error)
                return state
            case this.id + '/add-test-image':
                var testImages = state.get('testImages')
                state = state.update('testImages', testImages => testImages.push({'base64': action.imageBase64}))
                return state
            case this.id + '/load-attribute-attention':
                var attributes = state.get('attributes').toJS()
                for (var i = 0; i < attributes.length; i++) {
                    if (attributes[i].id == action.attr_id) {
                        state = state.set('attention', Immutable.List(attributes[i].attention))
                    }
                }
                return state
        }
        return state;
    }
}

export default Store;

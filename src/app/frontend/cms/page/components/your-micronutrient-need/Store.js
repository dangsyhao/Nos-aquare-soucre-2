import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'your-micronutrient-need') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'background':          '',
            'paddingBottom':       '',
            'paddingTop':          '',
            'offset':              '',
            'span':                '',

            'titleLeft':           'Title Left',
            'text':                [],
            'image':               [],
            'titleRight':          'Title Right',
            'textRight':           'Text Right',
            'buttonText':          'Button Text',
            'buttonLink':          ''
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
                state = state.set('titleLeft', action.parameters.titleLeft)
                state = state.set('text', action.parameters.text)
                state = state.set('image', action.parameters.image)
                state = state.set('titleRight', action.parameters.titleRight)
                state = state.set('textRight', action.parameters.textRight)
                state = state.set('buttonText', action.parameters.buttonText)
                state = state.set('buttonLink', action.parameters.buttonLink)
                return state
        }
        return state;
    }
}

export default Store;

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'made-for-lisa') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'background':       '',
            'paddingBottom':    '',
            'paddingTop':       '',
            'offset':           '',
            'span':             '',

            'center_image':     '',

            'title1':           'Title #1',
            'text1':            'Text #1',
            'title2':           'Title #2',
            'text2':            'Text #2',
            'title3':           'Title #3',
            'text3':            'Text #3',
            'title4':           'Title #4',
            'text4':            'Text #4',
            'title5':           'Title #5',
            'text5':            'Text #5',
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

                state = state.set('center_image', action.parameters.center_image)

                state = state.set('title1', action.parameters.title1)
                state = state.set('text1', action.parameters.text1)
                state = state.set('title2', action.parameters.title2)
                state = state.set('text2', action.parameters.text2)
                state = state.set('title3', action.parameters.title3)
                state = state.set('text3', action.parameters.text3)
                state = state.set('title4', action.parameters.title4)
                state = state.set('text4', action.parameters.text4)
                state = state.set('title5', action.parameters.title5)
                state = state.set('text5', action.parameters.text5)
                return state
        }
        return state;
    }
}

export default Store;

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'image-slider') {
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
            'title':           '',
            'sliders':    Immutable.List([]),
            'selectedItem':    0,
            'settings':        {
              infiniteLoop: true,
              showStatus: false,
              showIndicators: false,
              showThumbs: false,
              autoPlay:   true,
              centerMode: true,
              centerSlidePercentage: 35
            }
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/next-slide':
                state = state.set('index', action.index);
                return state
            case this.id + '/load':
                state = state.set('background', action.parameters.background)
                state = state.set('height', action.parameters.height)
                state = state.set('paddingTop', action.parameters.paddingTop)
                state = state.set('paddingBottom', action.parameters.paddingBottom)
                state = state.set('title', action.parameters.title)
                state = state.set('sliders', Immutable.List(action.parameters.sliders))
                return state
            case this.id + '/set-item':
                state = state.set('selectedItem',action.value)
                return state
            case this.id + '/set-settings':
                state = state.set('settings', action.settings)
                return state
        }
        return state;
    }
}

export default Store;

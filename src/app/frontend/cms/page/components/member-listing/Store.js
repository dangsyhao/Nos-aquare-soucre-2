import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'member-listing') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'isBlocking':       false,
            'background':      '',
            'height':          '',
            'paddingTop':      '',
            'offset':          '',
            'span':            '',

            'title':            '',
            'members':          Immutable.List([
            ])
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/load':
                state = state.set('background', action.parameters.background)
                state = state.set('height', action.parameters.height)
                state = state.set('paddingTop', action.parameters.paddingTop)
                state = state.set('offset', action.parameters.offset)
                state = state.set('span', action.parameters.span)

                state = state.set('title', action.parameters.title)
                state = state.set('members', Immutable.List(action.parameters.members))
                return state
        }
        return state;
    }
}

export default Store;

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'page-detail') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'id':         '',
            'title':      '',
            'url':        '',
            'message':    Immutable.Map({}),
            'isLoading':  false
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/load':
                state = state.set('id', action.data.id)
                state = state.set('title', action.data.title)
                state = state.set('url', action.data.url)
                return state
            case this.id + '/start':
                state = state.set('isLoading', true)
            case this.id + '/success':
                state = state.set('isLoading', false)
            case this.id + '/fail':
                state = state.set('isLoading', false)
            case this.id + '/message':
                state = state.set('message', Immutable.Map({kind: action.kind, message: action.message}))
                state = state.set('isLoading', false)
        }
        return state;
    }
}

export default Store;

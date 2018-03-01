import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id='user-service-backend') {
        super(dispatcher);
        this.dispatcher = dispatcher;
        this.id = id;
    }

    getInitialState() {
        return Immutable.Map({
            'username':         '',
            'fullname':         '',
            'is_show':          false,
        })
    }
    reduce(state, action) {
        switch (action.type) {
            case this.id + '/set-user':
                state = state.set('username', action.user_info_backend.username)
                state = state.set('fullname', action.user_info_backend.fullname)
                return state
            case this.id + '/logout':
                state = state.set('username', '')
                state = state.set('fullname', '')
                return state
            case this.id + '/is_show':
                var is_show = state.get('is_show')
                state = state.set('is_show', !is_show)
                return state
        }
        return state;
    }
}
export default Store;

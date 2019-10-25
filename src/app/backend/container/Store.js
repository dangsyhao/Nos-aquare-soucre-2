import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'page-container') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'applicationTitle': 'Not A Square CMS Admin',
            'userName':         'Anonymous',
            'selectedMenuId':   'dashboard',
            'menu':             Immutable.List([
                {
                    'name':    '',
                    'entries':   [
                        { 'name':  'Dashboard',           'url': '/backend'},
                        { 'name':  'Page',                'url': '/backend/page'},
                        { 'name':  'Text Block',          'url': '/backend/text_block'},
                        { 'name':  'User',                'url': '/backend/user'},
                        { 'name':  'Settings',            'url': '/backend/setting'},
                    ]
                }
            ])
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/set-selected-menu':
                state = state.set('selectedMenuId', action.menuId)
                return state
        }
        return state;
    }
}

export default Store;

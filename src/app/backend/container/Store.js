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
            'menu':             Immutable.List([
                {
                    'name':    '',
                    'entries':   [
                        { 'name':  'Dashboard',           'url': '/backend'},
                        { 'name':  'Page',                'url': '/backend/page'},
                        { 'name':  'Text Block',          'url': '/backend/text_block'},
                        { 'name':  'Settings',            'url': '/backend/setting'},
                    ]
                }
            ])
        })
    }

    reduce(state, action) {
        return state;
    }
}

export default Store;

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
    constructor(dispatcher, id = 'container') {
        super(dispatcher)
        this.dispatcher = dispatcher
        this.id = id
    }

    getInitialState() {
        return Immutable.Map({
            'applicationTitle': 'Not A Box CMS',
            'userName':         'Anonymous',
            'menu':             Immutable.List([
                {
                    'name':    '',
                    'entries':   [
                        { 'name':  'Summary',               'url': '/summary'},
                    ]
                }
            ]),
            'isShow':   false,
            'isHelp':   false,
            'isShowMobileMenu': false,
            'footer_background':    "",
            'footer_logo':          "",
            'footer_menu':          Immutable.List([]),
        })
    }

    reduce(state, action) {
        switch (action.type) {
            case this.id + '/show-menu':
                var isShow = state.get('isShow')
                state = state.set('isShow', !isShow)
                return state
            case this.id + '/toggle-mobile-menu':
                var isShowMobileMenu = state.get('isShowMobileMenu')
                state = state.set('isShowMobileMenu', !isShowMobileMenu)
                return state
            case this.id + '/change-help':
                var isHelp = state.get('isHelp')
                state = state.set('isHelp', !isHelp);
                return state
            case this.id + '/load-setting':
                state = state.set('footer_background', action.data.footer_background)
                state = state.set('footer_logo', action.data.footer_logo)
                state = state.set('footer_menu', Immutable.List(action.data.footer_menu))
                return state
        }
        return state;
    }
}

export default Store;

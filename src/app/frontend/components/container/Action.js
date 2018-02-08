import jQuery from 'jquery';

class Action {
    constructor(dispatcher, id='container') {
        this.dispatcher = dispatcher;
        this.id = id;
    }

    changeCart(){
        this.dispatchChangeCart()
    }
    showMenu() {
        this.dispatcher.dispatch({
            type:            this.id + '/show-menu',
        })
    }
    showHelp(e) {
        this.dispatcher.dispatch({
            type:               this.id + '/change-help',
        })
    }

    load() {
        var _this = this;
        jQuery.ajax({
            type:      'GET',
            url:       __params.config['api.endpoint'] + '/setting/load',
            dataType:  'json',
            success:   function(result) {
                _this.setSetting(result)
            },
            error: function(data) {
                console.log("Fail to connect to API")
            }
        })
    }
    toggleMobileMenu() {
        this.dispatcher.dispatch({
            type:           this.id + '/toggle-mobile-menu'
        })
    }
    //////////////////////////////////////////
    // x. DISPATCHER
    setSetting(data) {
        this.dispatcher.dispatch({
            type:            this.id + '/load-setting',
            data:            data,
        })
    }
}

export default Action;

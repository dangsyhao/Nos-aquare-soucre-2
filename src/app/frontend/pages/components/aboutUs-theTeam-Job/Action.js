import jQuery from "jquery";

class Action {

    constructor(dispatcher, id='what-is-web-application') {
        this.dispatcher = dispatcher;
        this.id = id;
    }

    load() {
        var _this = this;
        jQuery.ajax({
            type:         'GET',
            url:          __params.config['api.endpoint'] + '/front/job/list',
            dataType:     'json',
            data:         {},
            async:        false,
            success:      function(result) {
                if(result.status === 'ok') {
                    _this.dispatcher.dispatch({
                        type:_this.id,
                        jobs_data:result.data.records,
                    })
                }
            },
            error: function(data) {
               //
            }
        })
    }


}

export default Action;

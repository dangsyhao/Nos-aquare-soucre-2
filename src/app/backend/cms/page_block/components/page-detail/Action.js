import jQuery from 'jquery';

class Action {
    constructor(dispatcher, id='page-detail') {
        this.dispatcher = dispatcher;
        this.id = id;
    }

    load() {
      var _this = this;
      this.dispatchLoadStart()
      var url  = __params.config['api.endpoint']
      if (__params.query.id) {
        url += '/page/get?page_block_id=' + __params.query.id
      }
      if (__params.query.page_id) {
        url += '/page/get?page_id=' + __params.query.page_id
      }
      jQuery.ajax({
          type:         'GET',
          url:          url,
          dataType:     'json',
          success:      function(result) {
              if (result.status == 'ok') {
                  _this.dispatchChangeValue(result.data.record)
                  _this.dispatchLoadSuccess();
              }
              else {
                  _this.dispatchAddMessage('error', "Fail to load form")
                  _this.dispatchLoadFail()
              }
          },
          error:        function(data) {
              _this.dispatchAddMessage('error', "Fail to connect to API")
              _this.dispatchLoadFail()
          }
      })

    }
    dispatchLoadStart() {
        this.dispatcher.dispatch({
            type: this.id + '/start'
        })
    }
    dispatchLoadSuccess() {
        this.dispatcher.dispatch({
            type: this.id + '/success'
        })
    }
    dispatchLoadFail() {
        this.dispatcher.dispatch({
            type: this.id + '/fail'
        })
    }
    dispatchAddMessage(kind, message) {
      this.dispatcher.dispatch({
          type:     this.id + '/message',
          kind:     kind,
          message:  message
      })
    }
    dispatchChangeValue(data) {
        this.dispatcher.dispatch({
            type: this.id + '/load',
            data: data
        })
    }
}

export default Action;

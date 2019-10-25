import jQuery from 'jquery';

class Action {
    constructor(dispatcher, id = 'form-search') {
        this.dispatcher = dispatcher;
        this.id = id;
    }

    load() {

    }

    changeValue(e) {
      this.dispatcher.dispatch({
          type:   this.id + '/change-value',
          event:  e,
      })
    }

    search(props) {
        let _this = this;
        props.dataTableAction.dispatchLoadRecordsStart()
        jQuery.ajax({
            type:      'GET',
            url:       __params.config['api.endpoint'] + '/user/list',
            data:      {
              username: props.data.get('filter').get('username'),
            },
            dataType:  'json',
            success:   function(result) {
              if (result.status == 'ok') {
                  props.dataTableAction.dispatchLoadRecordsSuccess(result.data.records, result.data.total_matched)
              }
              else {
                  props.dataTableAction.dispatchLoadRecordsFail("Fail to load records")
              }
            },
            error: function(data) {
                props.dataTableAction.dispatchLoadRecordsFail("Fail to connect to API")
            }
        })

    }

}

export default Action;

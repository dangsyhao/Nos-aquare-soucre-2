
import LibraryDataTable from 'library-data-table';
import jQuery from 'jquery';

class Action extends LibraryDataTable.Action {
    extractTableParams(dataTable) {
        var params = {}
        params['_pager_start'] = (dataTable.get('currentPage') - 1) *  dataTable.get('recordPerPage');
        params['_pager_num'] = dataTable.get('recordPerPage');

        var filters = dataTable.get('filters');
        for (var k in filters) {
            params[k] = filters.get(k);
        }
        return params;
    }

    loadRecords(props) {
        this.dispatchLoadRecordsStart();

        var _this = this;
        var params = this.extractTableParams(props.dataTable)
        jQuery.ajax({
            type:      'GET',
            url:       __params.config['api.endpoint'] + '/job/list',
            data:      params,
            dataType:  'json',
            success:   function(result) {
                if (result.status == 'ok') {
                    _this.dispatchLoadRecordsSuccess(result.data.records, result.data.total_matched)
                }
                else {
                    _this.dispatchLoadRecordsFail("Fail to load records")
                }
            },
            error: function(data) {
                _this.dispatchLoadRecordsFail("Fail to connect to API")
            }
        })
    }
    delete(props, id) {
        var _this = this;
        var params = this.extractTableParams(props.dataTable)
        var confirm = window.confirm("Are you sure?");
        if (confirm) {
            jQuery.ajax({
                type:      'POST',
                url:       __params.config['api.endpoint'] + '/job/delete',
                data: JSON.stringify({
                    id: id
                }),
                dataType:  'json',
                success:   function(result) {
                    location.reload()
                },
                error: function(data) {
                }
            })
        }
    }
}

export default Action;

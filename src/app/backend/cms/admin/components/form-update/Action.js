import LibraryForm from 'library-form'
import jQuery from 'jquery'
class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'username':           new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'username'),
            'name':               new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'name'),
        }
    }

    load() {
        var _this = this;
        this.dispatchFormLoadStart()
        jQuery.ajax({
            type:         'GET',
            url:          __params.config['api.endpoint'] + '/admin/get?id='+ __params.query.id,
            dataType:     'json',
            data:         {},
            async:        false,
            success:      function(result) {
                if(result.status == 'ok') {
                    _this.helper('username').dispatchChangeValue(result.data.record.username)
                    _this.helper('name').dispatchChangeValue(result.data.record.name)
                    _this.dispatchFormLoadSuccess();
                }
            },
            error:        function(data) {
                _this.dispatchFormAddMessage("error", "Can't communicate to API")
                _this.dispatchFormSubmitFail(values)
            }
        })
    }

    resetForm() {
        for (var fieldId in this.getActionHelpers()) {
            this.helper(fieldId).dispatchClearValue()
        }
        this.load()
    }

    submit(form, e, props) {
        var _this = this;
        var values = this.getValues(form)
        this.clear()
        var hasError = false

        if (!values.name) {
            hasError = true
            this.helper('name').dispatchHasError('This field is mandatory')
        }
        if (!hasError) {
            this.dispatchFormLoadStart()
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/admin/update?id='+ __params.query.id,
                dataType:     'json',
                data:         JSON.stringify(values),
                success:      function(result) {
                    if (result.status == 'ok') {
                        _this.dispatchFormAddMessage("info", "The record has been update successfully!")
                        _this.dispatchFormSubmitSuccess(values)
                    }
                    else {
                        _this.dispatchFormAddMessage("error", "Can't update the record")
                        _this.dispatchFormSubmitFail(values)
                    }
                },
                error:        function(data) {
                    _this.dispatchFormAddMessage("error", "Can't communicate to API")
                    _this.dispatchFormSubmitFail(values)
                }
            })
        }
        else {
            _this.dispatchFormAddMessage("error", "Validation failed")
        }
    }
}

export default Action;

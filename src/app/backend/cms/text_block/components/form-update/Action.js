import LibraryForm from 'library-form'
import jQuery from 'jquery';
class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'code':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'code'),
            'en':                new LibraryForm.Common.Textarea.ActionHelper(this.dispatcher, this.formId, 'en'),
        }
    }

    load() {
        var _this = this;
        this.dispatchFormLoadStart()
        jQuery.ajax({
            type:         'GET',
            url:          __params.config['api.endpoint'] + '/text_block/get?id=' + __params.query.id,
            dataType:     'json',
            success:      function(result) {
                if (result.status == 'ok') {
                    _this.helper('code').dispatchChangeValue(result.data.record.code)
                    _this.helper('en').dispatchChangeValue(result.data.record.en)
                    _this.dispatchFormLoadSuccess();
                }
                else {
                    _this.dispatchFormAddMessage('error', "Fail to load form")
                    _this.dispatchFormLoadFail()
                }
            },
            error:        function(data) {
                _this.dispatchFormAddMessage('error', "Fail to connect to API")
                _this.dispatchFormLoadFail()
            }
        })
    }

    resetForm() {
        for (var fieldId in this.getActionHelpers()) {
            this.helper(fieldId).dispatchClearValue()
        }
        this.load()
    }

    submit(form, e) {
        var _this = this;
        var values = this.getValues(form)
        this.clear()

        var hasError = false
        if (!values.code) {
            hasError = true
            this.helper('code').dispatchHasError('This field is mandatory')
        }
        if (!hasError) {
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/text_block/update?id=' + __params.query.id,
                dataType:     'json',
                data:         JSON.stringify(values),
                success:      function(result) {
                    if (result.status == 'ok') {
                        _this.dispatchFormAddMessage("info", "The record has been updated successfully!")
                        _this.dispatchFormSubmitSuccess(values)
                        _this.resetForm()
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

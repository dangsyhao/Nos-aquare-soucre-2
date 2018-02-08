import LibraryForm from 'library-form'
import jQuery from 'jquery';

class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'title':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'title'),
            'url':                new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'url'),
            'description':        new LibraryForm.Common.Textarea.ActionHelper(this.dispatcher, this.formId, 'description'),
        }
    }

    load() {
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
        if (!values.title) {
            hasError = true
            this.helper('title').dispatchHasError('This field is mandatory')
        }
        if (!values.url) {
            hasError = true
            this.helper('url').dispatchHasError('This field is mandatory')
        }

        if (!hasError) {
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/page/create',
                dataType:     'json',
                data:         JSON.stringify(values),
                success:      function(result) {
                    if (result.status == 'ok') {
                        _this.dispatchFormAddMessage('info', "The record has been created successfully!")
                        _this.dispatchFormSubmitSuccess(values)
                        _this.resetForm()
                    }
                    else {
                        _this.dispatchFormAddMessage('error', "Can't update the record")
                        _this.dispatchFormSubmitFail(values)
                    }
                },
                error:        function(data) {
                    _this.dispatchFormAddMessage('error', "Can't communicate to API")
                    _this.dispatchFormSubmitFail(values)
                }
            })
        }
        else {
            _this.dispatchFormAddMessage('error', "Validation failed!")
            _this.dispatchFormSubmitFail(values)
        }
    }
}

export default Action;

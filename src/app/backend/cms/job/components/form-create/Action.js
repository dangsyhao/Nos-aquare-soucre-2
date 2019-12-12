import LibraryForm from 'library-form'
import jQuery from 'jquery'
class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'title':                    new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'title'),
            'is_fulltime':              new LibraryForm.Common.Checkbox.ActionHelper(this.dispatcher, this.formId, 'is_fulltime'),
            'is_parttime':              new LibraryForm.Common.Checkbox.ActionHelper(this.dispatcher, this.formId, 'is_parttime'),
            'hour_per_week':              new LibraryForm.Common.Checkbox.ActionHelper(this.dispatcher, this.formId, 'hour_per_week'),
            'location':                 new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'location'),
            'experience_required':      new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'experience_required'),
        }
    }

    load() {
        var _this = this;

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
        if (!values.title) {
            hasError = true
            this.helper('title').dispatchHasError('This field is mandatory')
        }

        if (!hasError) {
            this.dispatchFormLoadStart()
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/job/create',
                dataType:     'json',
                data:         JSON.stringify(values),
                success:      function(result) {
                    if (result.status == 'ok') {
                        _this.dispatchFormAddMessage("info", "The record has been created successfully!")
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

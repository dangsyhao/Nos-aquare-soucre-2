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
            'password':           new LibraryForm.Common.Password.ActionHelper(this.dispatcher, this.formId, 'password'),
            'repassword':         new LibraryForm.Common.Password.ActionHelper(this.dispatcher, this.formId, 'repassword'),
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
        if (!values.username) {
            hasError = true
            this.helper('username').dispatchHasError('This field is mandatory')
        }
        if (!values.password) {
            hasError = true
            this.helper('password').dispatchHasError('This field is mandatory')
        }
        if (!values.repassword) {
            hasError = true
            this.helper('repassword').dispatchHasError('This field is mandatory')
        }
        if (values.repassword != values.password) {
            hasError = true
            this.helper('repassword').dispatchHasError('Retype password did not match!')
        }
        if (!values.name) {
            hasError = true
            this.helper('name').dispatchHasError('This field is mandatory')
        }

        if (!hasError) {
            values.username = values.username

            this.dispatchFormLoadStart()
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/admin/create',
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

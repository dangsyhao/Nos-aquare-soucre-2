import LibraryForm from 'library-form'
import jQuery from 'jquery'
class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'username':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'username'),
            'password':           new LibraryForm.Common.Password.ActionHelper(this.dispatcher, this.formId, 'password'),
            'repassword':         new LibraryForm.Common.Password.ActionHelper(this.dispatcher, this.formId, 'repassword'),
            'fullname':           new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'fullname'),
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
        if (!values.fullname) {
            hasError = true
            this.helper('fullname').dispatchHasError('This field is mandatory')
        }

        if(!hasError) {
            this.dispatchFormLoadStart()
            jQuery.ajax({
                type:         'GET',
                url:          __params.config['api.endpoint'] + '/user/check?username='+ values.username,
                dataType:     'json',
                data:         {},
                async:        false,
                success:      function(result) {
                    if(result.data.record == 1) {
                        _this.helper('username').dispatchHasError('Username is already taken, please try another!')
                        _this.dispatchFormSubmitFail('')
                        hasError= true
                    }
                },
                error:        function(data) {
                    _this.dispatchFormAddMessage("error", "Can't communicate to API")
                    _this.dispatchFormSubmitFail(values)
                }
            })
        }
        if (!hasError) {
            values.username= values.username

            this.dispatchFormLoadStart()
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/user/create',
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

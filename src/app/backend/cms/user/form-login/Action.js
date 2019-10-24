import LibraryForm from 'library-form'
import jQuery from 'jquery'
import UserService from 'backend-app-services/userServices'

class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'username':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'username'),
            'password':           new LibraryForm.Common.Password.ActionHelper(this.dispatcher, this.formId, 'password'),
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

        if (!hasError) {
            values.username= values.username

            this.dispatchFormLoadStart()
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/user/login',
                dataType:     'json',
                data:         JSON.stringify(values),
                success:      function(result) {
                    if (result.status == 'ok') {
                        _this.dispatchFormAddMessage("info", "Login successfully!")
                        _this.dispatchFormSubmitSuccess(values)

                        UserService.logIn(result.data.token, JSON.stringify(result.data.info))
                        setTimeout(function() {
                            window.location = '/backend/page';
                        }, 500);
                    }
                    else {
                        _this.dispatchFormAddMessage("error", "Username or password invalid")
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

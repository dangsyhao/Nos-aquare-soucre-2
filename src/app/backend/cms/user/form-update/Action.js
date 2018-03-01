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
        this.dispatchFormLoadStart()
        jQuery.ajax({
            type:         'GET',
            url:          __params.config['api.endpoint'] + '/user/get?id='+ __params.query.id,
            dataType:     'json',
            data:         {},
            async:        false,
            success:      function(result) {
                if(result.status == 'ok') {
                    _this.helper('username').dispatchChangeValue(result.data.record.username)
                    _this.helper('fullname').dispatchChangeValue(result.data.record.fullname)
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

        if (values.password != '') {
            if (!values.repassword) {
                hasError = true
                this.helper('repassword').dispatchHasError('This field is mandatory')
            }
            if (values.repassword != values.password) {
                hasError = true
                this.helper('repassword').dispatchHasError('Retype password did not match!')
            }
        }

        if (!values.fullname) {
            hasError = true
            this.helper('fullname').dispatchHasError('This field is mandatory')
        }
        if (!hasError) {
            this.dispatchFormLoadStart()
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/user/update?id='+ __params.query.id,
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

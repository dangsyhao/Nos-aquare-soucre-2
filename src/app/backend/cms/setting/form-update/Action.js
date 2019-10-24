import LibraryForm from 'library-form'
import jQuery from 'jquery'
import ListFieldActionHelper from './list_field/ActionHelper'

class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'footer_background':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'footer_background'),
            'default_banner_background':      new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'default_banner_background'),
            'default_banner_text_color':      new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'default_banner_text_color'),
            'user_banner_color':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'user_banner_color'),
            'user_banner_background':         new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'user_banner_background'),
            'footer_menu':                    new ListFieldActionHelper(this.dispatcher, this.formId, 'footer_menu'),
        }
    }

    load() {
        var _this = this;
        this.dispatchFormLoadStart()
        jQuery.ajax({
            type:         'GET',
            url:          __params.config['api.endpoint'] + '/setting/get',
            dataType:     'json',
            success:      function(result) {
                if (result.status == 'ok') {
                    _this.helper('footer_background').dispatchChangeValue(result.data.record.footer_background)
                    _this.helper('footer_menu').dispatchChangeValue(result.data.record.footer_menu)
                    _this.helper('default_banner_background').dispatchChangeValue(result.data.record.default_banner_background)
                    _this.helper('default_banner_text_color').dispatchChangeValue(result.data.record.default_banner_text_color)
                    _this.helper('user_banner_color').dispatchChangeValue(result.data.record.user_banner_color)
                    _this.helper('user_banner_background').dispatchChangeValue(result.data.record.user_banner_background)
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
        // if (!values.footer_background) {
        //     hasError = true
        //     this.helper('footer_background').dispatchHasError('This field is mandatory')
        // }
        if (!hasError) {
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/setting/update',
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

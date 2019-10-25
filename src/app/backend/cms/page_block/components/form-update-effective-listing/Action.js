import LibraryForm from 'library-form'
import jQuery from 'jquery';
import ListFieldActionHelper from './list_field/ActionHelper';
class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'sort_order':          new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'sort_order'),
            'background':          new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'background'),
            'paddingTop':          new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'paddingTop'),
            'height':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'height'),
            'offset':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'offset'),
            'span':                new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'span'),

            'image':               new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'image'),
            'list_text_left':      new ListFieldActionHelper(this.dispatcher, this.formId, 'list_text_left'),
            'list_text_right':     new ListFieldActionHelper(this.dispatcher, this.formId, 'list_text_right'),
        }
    }

    load() {
        var _this = this;
        this.dispatchFormLoadStart()
        jQuery.ajax({
            type:         'GET',
            url:          __params.config['api.endpoint'] + '/page_block/get?id=' + __params.query.id,
            dataType:     'json',
            success:      function(result) {
                if (result.status == 'ok') {
                    var parameters = result.data.record.parameters
                    _this.helper('sort_order').dispatchChangeValue(parameters.sort_order)
                    _this.helper('background').dispatchChangeValue(parameters.background)
                    _this.helper('height').dispatchChangeValue(parameters.height)
                    _this.helper('paddingTop').dispatchChangeValue(parameters.paddingTop)
                    _this.helper('offset').dispatchChangeValue(parameters.offset)
                    _this.helper('span').dispatchChangeValue(parameters.span)

                    _this.helper('image').dispatchChangeValue(parameters.image)
                    _this.helper('list_text_left').dispatchChangeValue(parameters.list_text_left)
                    _this.helper('list_text_right').dispatchChangeValue(parameters.list_text_right)
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
        if (!hasError) {
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/page_block/update?id=' + __params.query.id,
                dataType:     'json',
                data:         JSON.stringify({
                    'sort_order': values.sort_order,
                    'parameters': values
                }),
                success:      function(result) {
                    if (result.status == 'ok') {
                        _this.dispatchFormAddMessage('info', "The record has been updated successfully!")
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

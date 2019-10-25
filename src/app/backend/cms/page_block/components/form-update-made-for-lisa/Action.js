import LibraryForm from 'library-form'
import jQuery from 'jquery';

class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'sort_order':          new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'sort_order'),
            'background':          new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'background'),
            'paddingTop':          new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'paddingTop'),
            'paddingBottom':       new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'paddingBottom'),
            'offset':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'offset'),
            'span':                new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'span'),

            'center_image':        new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'center_image'),

            'title1':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'title1'),
            'text1':               new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'text1'),
            'title2':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'title2'),
            'text2':               new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'text2'),
            'title3':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'title3'),
            'text3':               new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'text3'),
            'title4':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'title4'),
            'text4':               new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'text4'),
            'title5':              new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'title5'),
            'text5':               new LibraryForm.Common.Textbox.ActionHelper(this.dispatcher, this.formId, 'text5'),
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
                    _this.helper('paddingTop').dispatchChangeValue(parameters.paddingTop)
                    _this.helper('paddingBottom').dispatchChangeValue(parameters.paddingBottom)
                    _this.helper('offset').dispatchChangeValue(parameters.offset)
                    _this.helper('span').dispatchChangeValue(parameters.span)

                    _this.helper('center_image').dispatchChangeValue(parameters.center_image)

                    _this.helper('title1').dispatchChangeValue(parameters.title1)
                    _this.helper('text1').dispatchChangeValue(parameters.text1)
                    _this.helper('title2').dispatchChangeValue(parameters.title2)
                    _this.helper('text2').dispatchChangeValue(parameters.text2)
                    _this.helper('title3').dispatchChangeValue(parameters.title3)
                    _this.helper('text3').dispatchChangeValue(parameters.text3)
                    _this.helper('title4').dispatchChangeValue(parameters.title4)
                    _this.helper('text4').dispatchChangeValue(parameters.text4)
                    _this.helper('title5').dispatchChangeValue(parameters.title5)
                    _this.helper('text5').dispatchChangeValue(parameters.text5)
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

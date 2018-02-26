import LibraryForm from 'library-form'
import jQuery from 'jquery';

class Action extends LibraryForm.Form.Action {
    constructor(dispatcher, formId='form') {
        super(dispatcher, formId)
    }
    initActionHelpers() {
        this._actionHelpers = {
            'page_id':            new LibraryForm.Common.Hidden.ActionHelper(this.dispatcher, this.formId, 'page_id'),
            'kind':               new LibraryForm.Common.Select.ActionHelper(this.dispatcher, this.formId, 'kind'),
        }
    }

    load() {
        this.helper('page_id').dispatchChangeValue(__params.query.page_id)
        this.helper('kind').dispatchSetChoices([
            {'value': 'banner',                                   'label': 'General - Banner'},
            {'value': 'text',                                     'label': 'General - Text'},
            {'value': 'text-column',                              'label': 'General - Text (Columns)'},
            {'value': 'horizontal-step',                          'label': 'General - Horizontal Step'},
            {'value': 'member-listing',                           'label': 'General - Member Listing'},
            {'value': 'product-listing',                          'label': 'General - Product Listing'},
            {'value': 'testimonial',                              'label': 'General - Testimonial'},
            {'value': 'slider',                                   'label': 'General - Slider'},
            {'value': 'faq',                                      'label': 'General - FAQ'},
            {'value': 'page-listing',                             'label': 'General - Page Listing'},
            {'value': 'made-for-lisa',                            'label': 'Custom - Made for Lisa'},
            {'value': 'your-micronutrient-need',                  'label': 'Custom - Your micronutrient need'},
            {'value': 'ultimate-bundle',                          'label': 'Custom - Ultimate bundle'},
            {'value': 'nutrient-listing',                         'label': 'Custom - Nutrient Listing'},
            {'value': 'image-slider',                             'label': 'Custom - Image Slider'},
            {'value': 'text-image',                               'label': 'Custom - Text Image'},
            {'value': 'fashion-ai-cloth-detection',               'label': 'Fashion AI - Cloth Detection'},
            {'value': 'fashion-ai-category-classification',       'label': 'Fashion AI - Category Classification'},
            {'value': 'fashion-ai-sleeve-length-classification',  'label': 'Fashion AI - Sleeve Length Classification'},
        ])
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
        if (!values.kind) {
            hasError = true
            this.helper('kind').dispatchHasError('This field is mandatory')
        }
        if (!hasError) {
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/page_block/create',
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

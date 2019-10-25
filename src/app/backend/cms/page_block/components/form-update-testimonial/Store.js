import Immutable from 'immutable';
import LibraryForm from 'library-form'

import TestimonialFieldStoreHelper from './testimonial_field/StoreHelper'

class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'sort_order':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'sort_order'),
            'background':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'background'),
            'paddingBottom':               new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingBottom'),
            'paddingTop':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingTop'),
            'offset':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'offset'),
            'span':                        new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'span'),

            'testimonials':                new TestimonialFieldStoreHelper(this.formId, 'testimonials'),
        }
    }
}

export default Store;

import Immutable from 'immutable';
import LibraryForm from 'library-form'

import SliderFieldStoreHelper from './slider_field/StoreHelper'

class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'sort_order':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'sort_order'),
            'background':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'background'),
            'height':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'height'),
            'paddingTop':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingTop'),
            'paddingBottom':               new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingBottom'),
            'title':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title'),
            'buttonText':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'buttonText'),
            'buttonLink':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'buttonLink'),
            'sliders':                     new SliderFieldStoreHelper(this.formId, 'sliders'),
        }
    }
}

export default Store;

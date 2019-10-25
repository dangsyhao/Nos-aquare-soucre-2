import Immutable from 'immutable';
import LibraryForm from 'library-form'

import StepFieldStoreHelper from './step_field/StoreHelper'

class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'sort_order':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'sort_order'),
            'background':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'background'),
            'paddingTop':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingTop'),
            'paddingBottom':               new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingBottom'),
            'offset':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'offset'),
            'span':                        new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'span'),

            'title':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title'),
            'steps':                       new StepFieldStoreHelper(this.formId, 'steps'),
        }
    }
}

export default Store;

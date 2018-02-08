import Immutable from 'immutable';
import LibraryForm from 'library-form'
import ListFieldStoreHelper from './list_field/StoreHelper'

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
            'offset':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'offset'),
            'span':                        new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'span'),

            'image':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'image'),
            'list_text_left':              new ListFieldStoreHelper(this.formId, 'list_text_left'),
            'list_text_right':             new ListFieldStoreHelper(this.formId, 'list_text_right'),
        }
    }
}

export default Store;

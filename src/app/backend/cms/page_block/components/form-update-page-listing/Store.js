import Immutable from 'immutable';
import LibraryForm from 'library-form'
import PageListFieldStoreHelper from './page_list_field/StoreHelper'

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

            'title':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title'),
            'pages':                       new PageListFieldStoreHelper(this.formId, 'pages'),
        }
    }
}

export default Store;

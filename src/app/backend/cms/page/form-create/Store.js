import Immutable from 'immutable';
import LibraryForm from 'library-form'

class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'title':                     new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title'),
            'url':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'url'),
            'description':               new LibraryForm.Common.Textarea.StoreHelper(this.formId, 'description'),
        }
    }
}

export default Store;

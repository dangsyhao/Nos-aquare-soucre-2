import Immutable from 'immutable';
import LibraryForm from 'library-form'

class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'username':              new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'username'),
            'password':           new LibraryForm.Common.Password.StoreHelper(this.formId, 'password'),
        }
    }
}

export default Store;

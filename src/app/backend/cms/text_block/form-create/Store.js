import Immutable from 'immutable';
import LibraryForm from 'library-form'
class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'code':              new LibraryForm.Common.Textbox.StoreHelper(this.dispatcher, 'code'),
            'en':                new LibraryForm.Common.Textarea.StoreHelper(this.dispatcher, 'en'),
        }
    }
}

export default Store;

import Immutable from 'immutable';
import LibraryForm from 'library-form'

class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'page_id':                    new LibraryForm.Common.Hidden.StoreHelper(this.formId, 'page_id'),
            'kind':                       new LibraryForm.Common.Select.StoreHelper(this.formId, 'kind'),
        }
    }
}

export default Store;

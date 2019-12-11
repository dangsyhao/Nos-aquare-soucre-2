import Immutable from 'immutable';
import LibraryForm from 'library-form'

class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'title':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title'),
            'is_fulltime':                new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'is_fulltime'),
            'is_parttime':                new LibraryForm.Common.Password.StoreHelper(this.formId, 'is_parttime'),
            'location':                   new LibraryForm.Common.Password.StoreHelper(this.formId, 'location'),
            'experience_required':        new LibraryForm.Common.Password.StoreHelper(this.formId, 'experience_required'),
        }
    }
}

export default Store;

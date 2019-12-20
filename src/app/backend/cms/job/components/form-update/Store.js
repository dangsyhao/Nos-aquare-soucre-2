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
            'hour_per_week':              new LibraryForm.Common.Password.StoreHelper(this.formId, 'hour_per_week'),
            'location':                   new LibraryForm.Common.Password.StoreHelper(this.formId, 'location'),
            'experience_required':        new LibraryForm.Common.Password.StoreHelper(this.formId, 'experience_required'),
            'max_salary':                       new LibraryForm.Common.Password.StoreHelper(this.formId, 'max_salary'),
            'job_summary':                  new LibraryForm.Common.Password.StoreHelper(this.formId, 'job_summary'),
        }
    }
}

export default Store;

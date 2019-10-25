import Immutable from 'immutable';
import LibraryForm from 'library-form'
import ListFieldStoreHelper from './list_field/StoreHelper'

class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'footer_background':              new LibraryForm.Common.Textbox.StoreHelper(this.dispatcher, 'footer_background'),
            'footer_menu':                    new ListFieldStoreHelper(this.formId, 'footer_menu'),
            'default_banner_background':      new LibraryForm.Common.Textbox.StoreHelper(this.dispatcher, 'default_banner_background'),
            'default_banner_text_color':      new LibraryForm.Common.Textbox.StoreHelper(this.dispatcher, 'default_banner_text_color'),
            'user_banner_background':         new LibraryForm.Common.Textbox.StoreHelper(this.dispatcher, 'user_banner_background'),
            'user_banner_color':              new LibraryForm.Common.Textbox.StoreHelper(this.dispatcher, 'user_banner_color'),

        }
    }
}

export default Store;

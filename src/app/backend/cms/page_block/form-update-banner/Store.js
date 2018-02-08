import Immutable from 'immutable';
import LibraryForm from 'library-form'

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
            'paddingBottom':               new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingBottom'),
            'offset':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'offset'),
            'span':                        new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'span'),

            'title':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title'),
            'subtitle':                    new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'subtitle'),
            'button1Text':                 new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'button1Text'),
            'button1Url':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'button1Url'),
            'button2Text':                 new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'button2Text'),
            'button2Url':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'button2Url'),

        }
    }
}

export default Store;

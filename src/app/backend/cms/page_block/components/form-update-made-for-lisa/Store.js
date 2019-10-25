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
            'paddingTop':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingTop'),
            'paddingBottom':               new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingBottom'),
            'offset':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'offset'),
            'span':                        new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'span'),

            'center_image':                new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'center_image'),

            'title1':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title1'),
            'text1':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'text1'),
            'title2':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title2'),
            'text2':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'text2'),
            'title3':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title3'),
            'text3':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'text3'),
            'title4':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title4'),
            'text4':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'text4'),
            'title5':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title5'),
            'text5':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'text5'),
        }
    }
}

export default Store;

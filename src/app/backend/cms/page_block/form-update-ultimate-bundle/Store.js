import Immutable from 'immutable';
import LibraryForm from 'library-form'
import ListFieldStoreHelper from './list_field/StoreHelper'
import ImageFieldStoreHelper from './image_field/StoreHelper'

class Store extends LibraryForm.Form.Store {
    constructor(dispatcher, id='form') {
        super(dispatcher, id)
    }
    initStoreHelpers() {
        this._storeHelpers = {
            'sort_order':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'sort_order'),
            'background':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'background'),
            'paddingTop':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingTop'),
            'paddingBottom':                   new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'paddingBottom'),

            'title':                           new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'title'),
            'images':                           new ImageFieldStoreHelper(this.formId, 'images'),
            'buttonText':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'buttonText'),
            'buttonLink':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'buttonLink'),
            'list':                            new ListFieldStoreHelper(this.formId, 'list'),

            'ecwidProductId':                  new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'ecwidProductId'),
        }
    }
}

export default Store;

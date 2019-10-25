import Immutable from 'immutable';
import LibraryForm from 'library-form'
import ImageFieldStoreHelper from './image_field/StoreHelper'
import TextFieldStoreHelper from './text_field/StoreHelper'

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
            'offset':                          new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'offset'),
            'span':                            new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'span'),

            'image':                           new ImageFieldStoreHelper(this.formId, 'image'),
            'text':                            new TextFieldStoreHelper(this.formId, 'text'),
            'titleLeft':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'titleLeft'),
            'titleRight':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'titleRight'),
            'textRight':                       new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'textRight'),
            'buttonText':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'buttonText'),
            'buttonLink':                      new LibraryForm.Common.Textbox.StoreHelper(this.formId, 'buttonLink'),
        }
    }
}

export default Store;

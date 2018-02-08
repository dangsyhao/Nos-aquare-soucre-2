import Immutable from 'immutable';
import LibraryForm from 'library-form';
import jQuery from 'jquery';
import Constants from './Constants'

class ActionHelper extends LibraryForm.Field.ActionHelper {
    load(params) {
        this.dispatchSubTypeLoad();
        var _this = this
        jQuery.ajax({
            type:         'GET',
            url:          __params.config['api.endpoint'] + '/file_upload/list',
            dataType:     'json',
            data:         params,
            success:      function(result) {
                if(result.status == 'ok') {
                    _this.dispatchSubTypeLoadSuccess(result.data.records)
                }
                else {
                    _this.dispatchSubTypeLoadFail('')
                }
            },
            error:        function(data) {
            }
        })
    }
    modal_show(isShow) {
        this.dispatchSubTypeShowModal(isShow)
    }
    getUrlImage(url) {
        this.dispatchSubTypeGetUrlImage(url)
    }
    fileUpload(e) {
        this.dispatchSubTypeFileOnChange(e.target.files[0])
    }
    onChangeSearch(e) {
        this.dispatchSubTypeChangeSearch(e.target.value)
    }
    onSearch(name) {
        var param = {
            'name': name
        }
        this.load(param)
    }
    onDeleteFile(id) {
        var _this= this
        if (confirm('Are you sure ?')) {
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/file_upload/delete?id='+ id,
                dataType:     'json',
                success:      function(result) {
                    _this.load()
                },
                error:        function(data) {
                }
            })
        }
    }
    uploadFile(file) {
        var _this= this
        if(file != null) {
            this.dispatchSubTypeLoad();
            var _this= this
            var formData=  new FormData()
            formData.append('file', file)
            jQuery.ajax({
                type:         'POST',
                url:          __params.config['api.endpoint'] + '/file_upload/upload',
                dataType:     'json',
                data:         formData,
                contentType:  false,
                cache :       false,
                processData:  false,
                success:      function(result) {
                    if (result.status == 'ok') {
                        _this.load()
                    }
                    else {
                        _this.dispatchSubTypeLoadFail('')
                    }
                },
                error:        function(data) {
                }
            })
        }
        else {
            _this.dispatchSubTypeSubmitFail('Please select file')
        }

    }
    ////////////////////////
    // xx Dispatcher
    dispatchSubTypeLoad() {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        'field-load'

        })
    }
    dispatchSubTypeChangeSearch(value) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        'change-search',
            value:          value

        })
    }
    dispatchSubTypeLoadSuccess(data) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        'load-success',
            data:            data

        })
    }
    dispatchSubTypeSubmitFail(message) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        'submit-fail',
            message:         message

        })
    }
    dispatchSubTypeLoadFail(message) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        'load-fail',
            message:         message

        })
    }
    dispatchSubTypeShowModal(isShow) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        'show-modal',
            isShow:         isShow

        })
    }
    dispatchSubTypeGetUrlImage(urlImage) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        'get-url-image',
            urlImage:       urlImage

        })
    }
    dispatchSubTypeFileOnChange(file) {
        this.dispatcher.dispatch({
            formId:         this.formId,
            fieldId:        this.fieldId,
            type:           'field-action',
            subtype:        'file-change',
            file:           file
        })
    }
}

export default ActionHelper;

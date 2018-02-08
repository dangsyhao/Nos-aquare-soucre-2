
module.exports.Form = {
    Action:     require('./src/form/Action'),
    Store:      require('./src/form/Store'),
    View:       require('./src/form/View')
}

module.exports.Field = {
    StoreHelper:     require('./src/field/StoreHelper'),
    ActionHelper:    require('./src/field/ActionHelper'),
    Constants:       require('./src/field/Constants')
}

module.exports.Common = {
    Textbox: {
        StoreHelper:     require('./src/common/textbox/StoreHelper'),
        ActionHelper:    require('./src/common/textbox/ActionHelper'),
        View:            require('./src/common/textbox/View')
    },
    Hidden: {
        StoreHelper:     require('./src/common/hidden/StoreHelper'),
        ActionHelper:    require('./src/common/hidden/ActionHelper'),
        View:            require('./src/common/hidden/View')
    },
    Password: {
        StoreHelper:     require('./src/common/password/StoreHelper'),
        ActionHelper:    require('./src/common/password/ActionHelper'),
        View:            require('./src/common/password/View')
    },
    Textarea: {
        StoreHelper:     require('./src/common/textarea/StoreHelper'),
        ActionHelper:    require('./src/common/textarea/ActionHelper'),
        View:            require('./src/common/textarea/View')
    },
    Select: {
        StoreHelper:     require('./src/common/select/StoreHelper'),
        ActionHelper:    require('./src/common/select/ActionHelper'),
        View:            require('./src/common/select/View'),
        Constants:       require('./src/common/select/Constants')
    },
    MultiSelect: {
        StoreHelper:     require('./src/common/multiselect/StoreHelper'),
        ActionHelper:    require('./src/common/multiselect/ActionHelper'),
        View:            require('./src/common/multiselect/View'),
        Constants:       require('./src/common/multiselect/Constants')
    },
    Checkbox: {
        StoreHelper:     require('./src/common/checkbox/StoreHelper'),
        ActionHelper:    require('./src/common/checkbox/ActionHelper'),
        View:            require('./src/common/checkbox/View')
    },
    DatePicker: {
        StoreHelper:     require('./src/common/datepicker/StoreHelper'),
        ActionHelper:    require('./src/common/datepicker/ActionHelper'),
        View:            require('./src/common/datepicker/View')
    },
    DateTimePicker: {
        StoreHelper:     require('./src/common/datetimepicker/StoreHelper'),
        ActionHelper:    require('./src/common/datetimepicker/ActionHelper'),
        View:            require('./src/common/datetimepicker/View')
    },
    AceEditor: {
        StoreHelper:     require('./src/common/ace/StoreHelper'),
        ActionHelper:    require('./src/common/ace/ActionHelper'),
        View:            require('./src/common/ace/View')
    },
    UploadFile: {
        StoreHelper:     require('./src/common/upload_file/StoreHelper'),
        ActionHelper:    require('./src/common/upload_file/ActionHelper'),
        View:            require('./src/common/upload_file/View')
    },
    ImageUpload: {
        StoreHelper:     require('./src/common/image_upload/StoreHelper'),
        ActionHelper:    require('./src/common/image_upload/ActionHelper'),
        View:            require('./src/common/image_upload/View')
    },
}

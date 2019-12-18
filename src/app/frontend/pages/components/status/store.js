import React from "react";
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


class Store extends React.Component{

    constructor() {
        super();
        this.status = 'CHUA CAP NHAT STATUS !';
    }

    getStatus () {
        return this.status;
    }

    changeStatus(text) {
         this.status = text;
    }

    emitChange() {
        this.emit('change');
    }

    addChangeListener(calback){
        this.on('change',calback)
    }

    removeChangeListener(calback){
        this.removeListener('change',calback);
    }

}

var Store_obj = new Store();
Store_obj= assign(Store_obj,EventEmitter.prototype);
export default Store_obj;

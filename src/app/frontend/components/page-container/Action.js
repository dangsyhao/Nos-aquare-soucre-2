import jQuery from 'jquery';

class Action {
    constructor(dispatcher, id='container') {
        this.dispatcher = dispatcher;
        this.id = id;
    }
    load() {
        var _this = this;
    }
    setSelectedMenu(menuId) {
        var _this = this;
        this.dispatcher.dispatch({
            type: _this.id + '/set-selected-menu',
            menuId: menuId
        })
    }

}

export default Action;

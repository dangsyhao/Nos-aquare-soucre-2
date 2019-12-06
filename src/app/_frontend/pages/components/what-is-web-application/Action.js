
class Action {
    constructor(dispatcher, id='what-is-web-application') {
        this.dispatcher = dispatcher;
        this.id = id;
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

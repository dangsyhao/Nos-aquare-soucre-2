
class Action {
    constructor(dispatcher, id='technology-web-technologies') {
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


class Action {
    constructor(dispatcher,id="call_status_action1") {
        this.dispatcher = dispatcher;
        this.id = id;
    }

    addNewText (text) {
        this.dispatcher.dispatch({
            actionType:this.id,
            text :text
        })
    }
}

export default Action

class Action {
    constructor(_dispatcher,id="call_status_action") {
        this.dispatcher = _dispatcher;
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

class Action {
    constructor(dispatcher, id='text-html') {
        this.dispatcher = dispatcher;
        this.id = id;
    }
    load(parameters) {
        this.dispatcher.dispatch({
            type: this.id + '/load',
            parameters: parameters
        })
    }

}

export default Action;

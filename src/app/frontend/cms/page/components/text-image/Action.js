
class Action {
    constructor(dispatcher, id='ultimate-bundle') {
        this.dispatcher = dispatcher;
        this.id = id;
    }
    load(parameters) {
        this.dispatcher.dispatch({
            type: this.id + '/load',
            parameters: parameters
        })
    }

    dispatchBlockUi(isBlock) {
        this.dispatcher.dispatch({
            type:            this.id + '/block-ui',
            isBlock:         isBlock
        })
    }
}

export default Action;

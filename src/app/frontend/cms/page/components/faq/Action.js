
class Action {
    constructor(dispatcher, id='faq') {
        this.dispatcher = dispatcher;
        this.id = id;
    }
    load(parameters) {
        this.dispatcher.dispatch({
            type: this.id + '/load',
            parameters: parameters
        })
    }
    scrollBox(index) {
        this.dispatcher.dispatch({
            type:     this.id + '/scroll-box',
            index:    index
        })
    }

}

export default Action;

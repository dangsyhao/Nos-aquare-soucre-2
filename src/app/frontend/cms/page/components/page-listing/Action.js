
import jQuery from 'jquery';

class Action {
    constructor(dispatcher, id='page-listing') {
        this.dispatcher = dispatcher;
        this.id = id;
    }
    load(parameters) {
        this.dispatcher.dispatch({
            type: this.id + '/load',
            parameters: parameters
        })
    }
    goto(link) {
        window.location.href = link;
    }
}

export default Action;

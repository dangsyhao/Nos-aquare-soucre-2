import jQuery from 'jquery';

class Action {
    constructor(dispatcher, id='member-listing') {
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

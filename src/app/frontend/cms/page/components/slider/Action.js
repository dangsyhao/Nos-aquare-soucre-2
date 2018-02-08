import jQuery from 'jquery';

class Action {
    constructor(dispatcher, id='slider') {
        this.dispatcher = dispatcher;
        this.id = id;
    }

    nextSlide(data) {
        var length = data.get('sliders').size;
        var index = data.get('index');
        if (index >= length*1200 - 1200) {
            index = -1200
        }
        this.dispatchSetIndex(index+1200);
    }

    dispatchSetIndex(index) {
        this.dispatcher.dispatch({
            type:       this.id + '/next-slide',
            index:      index
        })
    }
    load(parameters) {
        this.dispatcher.dispatch({
            type: this.id + '/load',
            parameters: parameters
        })
    }
    setItem(index) {
        let i = index
        this.dispatcher.dispatch({
            type:     this.id + '/set-item',
            value:    i,
        })
    }

}

export default Action;

import jQuery from 'jquery';

class Action {
    constructor(dispatcher, id='image-slider') {
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
    setSettings() {
        var settings = {}
        if (window.innerWidth < 860) {
            settings = {
              infiniteLoop: true,
              showStatus: false,
              showIndicators: false,
              showThumbs: false,
              autoPlay: true
            }

        } else {
            settings = {
              infiniteLoop: true,
              showStatus: false,
              showIndicators: false,
              showThumbs: false,
              autoPlay:   true,
              centerMode: true,
              centerSlidePercentage: 35
            }
        }
        this.dispatcher.dispatch({
            type:         this.id + '/set-settings',
            settings:     settings,
        })
    }

}

export default Action;


import jQuery from 'jquery';

class Action {
    constructor(dispatcher, id='category-classification') {
        this.dispatcher = dispatcher;
        this.id = id;
    }
    loadTestURL(url) {
        var xhr = new XMLHttpRequest();
        var _this = this;
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                _this.dispatcher.dispatch({
                    type:        _this.id + '/add-test-image',
                    imageBase64: reader.result
                })
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    load(parameters) {
        this.dispatcher.dispatch({
            type: this.id + '/load',
            parameters: parameters
        })
        this.loadTestURL("/public/static/tests/pattern/test1.jpg");
        this.loadTestURL("/public/static/tests/pattern/test2.jpeg");
        this.loadTestURL("/public/static/tests/pattern/test3.jpeg");
        this.loadTestURL("/public/static/tests/pattern/test4.jpeg");
        this.loadTestURL("/public/static/tests/pattern/test5.jpeg");
        this.loadTestURL("/public/static/tests/pattern/test6.jpeg");
        this.loadTestURL("/public/static/tests/pattern/test7.jpeg");
        this.loadTestURL("/public/static/tests/pattern/test8.jpeg");
        this.loadTestURL("/public/static/tests/pattern/test9.jpg");
    }
    submitTestImage(testImage) {
        var _this = this;
        _this.dispatcher.dispatch({
            type:           _this.id + '/change-file',
            imageBase64:    testImage.base64
        })
        jQuery.ajax({
            type:      'POST',
            url:       __params.config['fsai-api.pattern-recognition'] + '/predict',
            data:      testImage.base64,
            dataType:  'json',
            success:   function(result) {
                if (result.status == 'success') {
                    _this.dispatcher.dispatch({
                        type:         _this.id + '/success',
                        patterns:     result.results
                    })
                }
                else {
                    _this.dispatcher.dispatch({
                        type:        _this.id + '/failed',
                        error:       result.message
                    })
                }
            },
            error: function(data) {
                _this.dispatcher.dispatch({
                    type:        _this.id + '/failed',
                    error:       "Can't connect to API"
                })
            }
        })
    }
    changeFile(e) {
        var _this = this;
        var files = e.target.files
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                var imageBase64 = reader.result;

                _this.dispatcher.dispatch({
                    type:           _this.id + '/change-file',
                    imageBase64:    imageBase64
                })


                jQuery.ajax({
                    type:      'POST',
                    url:       __params.config['fsai-api.pattern-recognition'] + '/predict',
                    data:      imageBase64,
                    dataType:  'json',
                    success:   function(result) {
                        if (result.status == 'success') {
                            _this.dispatcher.dispatch({
                                type:         _this.id + '/success',
                                patterns:   result.results
                            })
                        }
                        else {
                            _this.dispatcher.dispatch({
                                type:        _this.id + '/failed',
                                error:       result.message
                            })
                        }
                    },
                    error: function(data) {
                        _this.dispatcher.dispatch({
                            type:        _this.id + '/failed',
                            error:       "Can't connect to API"
                        })
                    }
                })
            }
        }
    }
}

export default Action;

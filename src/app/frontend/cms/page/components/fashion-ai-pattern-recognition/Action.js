
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
        this.loadTestURL("/public/static/tests/test_image1.jpeg");
        this.loadTestURL("/public/static/tests/test_image2.jpeg");
        this.loadTestURL("/public/static/tests/test_image3.jpg");
        this.loadTestURL("/public/static/tests/test_image4.jpeg");
        this.loadTestURL("/public/static/tests/test_image5.jpg");
        this.loadTestURL("/public/static/tests/test_image6.jpg");
        this.loadTestURL("/public/static/tests/test_image7.jpeg");
    }
    submitTestImage(testImage) {
        var _this = this;
        _this.dispatcher.dispatch({
            type:           _this.id + '/change-file',
            imageBase64:    testImage.base64
        })
        jQuery.ajax({
            type:      'POST',
            url:       'http://127.0.0.1:8003/predict',
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
                    url:       'http://127.0.0.1:8003/predict',
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

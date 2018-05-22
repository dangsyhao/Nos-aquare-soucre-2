
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
        this.loadTestURL("/public/static/tests/upper/test1.jpg");
        this.loadTestURL("/public/static/tests/upper/test2.jpg");
        this.loadTestURL("/public/static/tests/upper/test3.jpg");
        this.loadTestURL("/public/static/tests/upper/test4.jpg");
        this.loadTestURL("/public/static/tests/upper/test5.jpg");
        this.loadTestURL("/public/static/tests/upper/test6.jpg");
        this.loadTestURL("/public/static/tests/upper/test7.jpg");
        this.loadTestURL("/public/static/tests/upper/test8.jpg");
        this.loadTestURL("/public/static/tests/upper/test9.jpg");
        this.loadTestURL("/public/static/tests/upper/test10.jpg");
        this.loadTestURL("/public/static/tests/upper/test11.jpg");
        this.loadTestURL("/public/static/tests/upper/test12.jpg");
        this.loadTestURL("/public/static/tests/upper/test13.jpg");
        this.loadTestURL("/public/static/tests/upper/test14.jpg");
        this.loadTestURL("/public/static/tests/upper/test15.jpg");
        this.loadTestURL("/public/static/tests/upper/test16.jpg");
        this.loadTestURL("/public/static/tests/upper/test17.jpg");
        this.loadTestURL("/public/static/tests/upper/test18.jpg");
        this.loadTestURL("/public/static/tests/upper/test19.jpg");
        this.loadTestURL("/public/static/tests/upper/test20.jpg");
        this.loadTestURL("/public/static/tests/upper/test21.jpg");
        this.loadTestURL("/public/static/tests/upper/test22.jpg");
        this.loadTestURL("/public/static/tests/upper/test23.jpg");
        this.loadTestURL("/public/static/tests/upper/test24.jpg");
        this.loadTestURL("/public/static/tests/upper/test25.jpg");
        this.loadTestURL("/public/static/tests/upper/test26.jpeg");
        this.loadTestURL("/public/static/tests/upper/test27.jpg");
        this.loadTestURL("/public/static/tests/upper/test28.jpg");
        this.loadTestURL("/public/static/tests/upper/test29.jpg");
        this.loadTestURL("/public/static/tests/upper/test30.jpg");
        this.loadTestURL("/public/static/tests/upper/test31.jpg");
        this.loadTestURL("/public/static/tests/upper/test32.jpg");
        this.loadTestURL("/public/static/tests/upper/test33.jpg");
        this.loadTestURL("/public/static/tests/upper/test34.jpg");
        this.loadTestURL("/public/static/tests/upper/test35.jpeg");
        this.loadTestURL("/public/static/tests/upper/test36.jpg");

    }
    submitTestImage(testImage) {
        var _this = this;
        _this.dispatcher.dispatch({
            type:           _this.id + '/change-file',
            imageBase64:    testImage.base64
        })
        jQuery.ajax({
            type:      'POST',
            url:       __params.config['fai-api.upper'] + '/analyze',
            data:      testImage.base64,
            dataType:  'json',
            success:   function(result) {
                if (result.status == 'success') {
                    _this.dispatcher.dispatch({
                        type:         _this.id + '/success',
                        result:       result
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
    loadAttributeAttention(e, attr_id) {
        var _this = this;
        _this.dispatcher.dispatch({
            type:     _this.id + '/load-attribute-attention',
            attr_id:  attr_id
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
                    url:       __params.config['fai-api.upper'] + '/analyze',
                    data:      imageBase64,
                    dataType:  'json',
                    success:   function(result) {
                        if (result.status == 'success') {
                            _this.dispatcher.dispatch({
                                type:         _this.id + '/success',
                                result:       result
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

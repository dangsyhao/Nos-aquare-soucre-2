
import jQuery from 'jquery';
class Action {
    constructor(dispatcher, id='product-listing') {
        this.dispatcher = dispatcher;
        this.id = id;
    }
    load(parameters){
        this.dispatcher.dispatch({
            type: this.id + '/load',
            parameters: parameters
        })
        var _this = this;
        var params = {
            '_sort_key': 'id',
            '_sort_dir': 'asc',
        }
        this.dispatchLoadRecordsStart();
        jQuery.ajax({
            type:      'GET',
            url:       __params.config['api.endpoint'] + '/product/list',
            data:      params,
            dataType:  'json',
            success:   function(result) {
                if (result.status == 'ok') {
                    _this.dispatchLoadRecordsSuccess(result.data.records, result.data.total_matched)
                }
                else {
                    _this.dispatchLoadRecordsFail("Fail to load records")
                }
            },
            error: function(data) {
                _this.dispatchLoadRecordsFail("Fail to connect to API")
            }
        })
    }
    add_cart(e, props, product) {
        e.preventDefault();
        var _this = this;
        var ecwid_product_id = parseInt(product.ecwid_product_id)
        this.dispatchBlockUi(true)
        Ecwid.Cart.addProduct(ecwid_product_id, function(success, product, cart){
            Ecwid.openPage('cart');
            _this.dispatchBlockUi(false)
        })
    }
    //////////////////////////////////////////
    // x. DISPATCHER
    dispatchBlockUi(isBlock) {
        this.dispatcher.dispatch({
            type:            this.id + '/block-ui',
            isBlock:         isBlock
        })
    }
    dispatchChangePrice(e, product) {
        this.dispatcher.dispatch({
            type:            this.id + '/change-price',
            service:         e.target.value,
            product:         product
        })
    }
    dispatchSetMessage(message) {
        this.dispatcher.dispatch({
            type:            this.id + '/set-message',
            message:         message
        })
    }

    dispatchLoadRecordsStart() {
        this.dispatcher.dispatch({
            type:            this.id + '/load-start',
        })
    }
    dispatchLoadRecordsSuccess(records, total_matched) {
        this.dispatcher.dispatch({
            type:            this.id + '/load-success',
            records:         records,
            total_matched:   total_matched
        })
    }
    dispatchLoadRecordsFail(message) {
        this.dispatcher.dispatch({
            type:            this.id + '/load-fail',
            message:         message
        })
    }
}

export default Action;

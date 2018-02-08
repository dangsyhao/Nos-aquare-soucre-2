
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
    addToCart(e, props) {
        e.preventDefault();
        var _this = this;
        var ecwid_product_id = parseInt(props.data.get('ecwidProductId'))
        _this.dispatchBlockUi(true)
        Ecwid.Cart.addProduct(ecwid_product_id, function(success, product, cart){
            Ecwid.openPage('cart');
            _this.dispatchBlockUi(false)
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

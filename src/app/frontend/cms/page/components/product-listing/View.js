import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import renderHTML from 'react-render-html';
import { translate } from 'react-i18next';

class View extends Component {
    componentDidMount() {
        this.props.action.load(this.props.parameters);
    }
    render() {
        var _this = this;
        var t = this.props.t
        var p = this.props.data.get('products')
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        return (
            <BlockUi tag="div" blocking={this.props.data.get('isBlocking')} style={style}>
                <div className="container-fluid claya-product-list">
                    <div className="row">
                        <div className={mclass}>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="c-center c-font-40">{renderHTML(data.get('title'))}</h2>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    p.map(function(product, key) {
                                        return (
                                            <div key={"product-item-"+ key} className="col-md-4" style={{ textAlign: 'center', color: '#8E9189', paddingBottom: 40 }}>
                                                <div><h3 className="c-font-bold c-font-25">{product.name}</h3></div>
                                                <a href={product.link}>
                                                    <img style={{ width: "77%"}} src={product.image} />
                                                </a>
                                                <div style={{ paddingLeft: "15%", paddingRight: "15%"}}><p style={{ textAlign: 'center'}}>{product.description}</p></div>
                                                <ul className="cy-product-list">
                                                    <li><hr></hr></li>
                                                    <li className={(product.supplement.includes('no_test') ? "active" : "")}>
                                                        <i className={(product.supplement.includes('no_test') ? "icon-check" : "icon-close")}></i>
                                                        &nbsp;&nbsp; {t('shopping_cart_supplement_subscription')}
                                                    </li>
                                                    <li><hr></hr></li>
                                                    <li className={(product.supplement.includes('dna_test') ? "active" : "")}>
                                                        <i className={(product.supplement.includes('dna_test') ? "icon-check" : "icon-close")}></i>
                                                        &nbsp;&nbsp; {t('shopping_cart_dna_test')}
                                                    </li>
                                                    <li><hr></hr></li>
                                                    <li className={(product.supplement.includes('blood_test') ? "active" : "")}>
                                                        <i className={(product.supplement.includes('blood_test') ? "icon-check" : "icon-close")}></i>
                                                        &nbsp;&nbsp; {t('shopping_cart_blood_test')}
                                                    </li>
                                                    <li><hr></hr></li>
                                                </ul>
                                                <h3 className="c-center c-font-20" style={{margin: '35px 0'}}><b>${parseFloat(product.price).toFixed(2)}</b> {t('shopping_cart_per_day')}</h3>
                                                <button type="button" onClick={e=> _this.props.action.add_cart(e, _this.props, product)} className="c-action-btn btn btn-md c-btn-square c-btn-green c-btn-circle" style={{width: '62%'}}><h3 className="c-font-bold">{t('shopping_cart_add_to_cart')}</h3></button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </BlockUi>
        )
    }
}

export default translate()(View);

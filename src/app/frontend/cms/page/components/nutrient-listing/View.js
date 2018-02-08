import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import renderHTML from 'react-render-html';
import {Tooltip, OverlayTrigger, Popover} from 'react-bootstrap';

class View extends Component {
    componentDidMount() {
        this.props.action.load(this.props.parameters);
    }
    render() {
        var _this = this;
        var p = this.props.data.get('products')
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.height = data.get('height')
        style.paddingTop = data.get('paddingTop')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        return (
            <BlockUi tag="div" blocking={this.props.data.get('isBlocking')} style={style}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={mclass}>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="c-center c-font-40">{renderHTML(data.get('title'))}</h2>
                                </div>
                            </div>
                            <div className="row">
                                { this.renderContent() }
                                { this.renderContentMobile() }
                            </div>
                        </div>
                    </div>
                </div>
            </BlockUi>
        )
    }
    renderContent() {
        var _this = this;
        var N = _this.props.data.get('nutrients').size
        var L = Math.ceil(N/2.0)
        var nutrientGroups = [
            _this.props.data.get('nutrients').slice(0, L),
            _this.props.data.get('nutrients').slice(L, N)
        ]

        return (
            <div className="claya-nutrient-listing">
                <div className="col-md-3" style={{ paddingTop: 70 }}>
                    {
                        nutrientGroups[0].map(function(nutrient, key) {
                            var tooltip =<Tooltip>{nutrient.description}</Tooltip>
                            return (
                                <OverlayTrigger overlay={tooltip} placement="right">
                                    <div className="row for-lisa-p" style={{lineHeight: 2}}>
                                      <div className="col-md-10 col-sm-10 col-xs-10">
                                          <p style={{marginLeft: '10%'}}>{nutrient.name}</p>
                                      </div>
                                      <div className="col-md-2 col-sm-2 col-xs-2">
                                          <a style={{float: 'right'}}><i className="fa fa-circle"></i></a>
                                      </div>
                                    </div>
                                </OverlayTrigger>
                            )
                        })
                    }
                </div>
                <div className="col-md-6">
                    <img className="img-responsive" src={_this.props.data.get('image')}></img>
                </div>
                <div className="col-md-3" style={{ paddingTop: 70 }}>
                    {
                        nutrientGroups[1].map(function(nutrient, key) {
                            var tooltip =<Tooltip>{nutrient.description}</Tooltip>
                            return (
                                <OverlayTrigger overlay={tooltip} placement="left">
                                  <div className="row for-lisa-p" style={{lineHeight: 2}}>
                                    <div className="col-md-2 col-sm-2 col-xs-2">
                                        <a style={{float: 'left'}}><i className="fa fa-circle"></i></a>
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-10">
                                        <p>{nutrient.name}</p>
                                    </div>
                                  </div>
                                </OverlayTrigger>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    renderContentMobile() {
        var _this = this;
        return (
            <div className="claya-nutrient-listing-mobile">
                <div className="col-xs-2"></div>
                <div className="col-xs-8">
                    {
                        _this.props.data.get('nutrients').map(function(nutrient, key) {
                            var tooltip =<Tooltip>{nutrient.description}</Tooltip>
                            return (
                                <OverlayTrigger overlay={tooltip} placement="top">
                                    <p style={{lineHeight: '20px',textAlign: 'center', width: '100%'}} className="for-lisa-p">
                                        <a><i className="fa fa-circle"></i></a>
                                        <span style={{ paddingLeft: 20 }}>{nutrient.name}</span>
                                    </p>
                                </OverlayTrigger>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default View;

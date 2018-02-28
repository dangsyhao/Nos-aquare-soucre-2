import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class View extends Component {
    render() {
        var _this = this;
        var patterns = _this.props.data.get('patterns');
        console.log(patterns.toJS())
        var style = {}
        var data = this.props.data
        style.background = data.get('background')
        style.width = "100%"
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        return (
            <div style={style}>
                <BlockUi tag="div" className="container-fluid" blocking={this.props.data.get('isBlocking')}>
                    <div className={mclass}>
                        <div className="row" style={{ paddingTop: 50 }}>
                            <div className="col-md-12">
                                <h1 className="text-center c-font-25">TEST IMAGES</h1>
                                <br/>
                                <div className="text-center">
                                    {
                                        _this.props.data.get('testImages').map(function(testImage, i) {
                                            return (
                                                <a onClick={e => _this.props.action.submitTestImage(testImage)} style={{ cursor: 'pointer'}}>
                                                    <img src={testImage.base64} style={{ height : 100}}/>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                                <br/><br/><br/><br/>

                                <h1 className="text-center c-font-25">UPLOAD IMAGE</h1>
                                <p className="text-center">.jpg only</p>
                                <div className="text-center">
                                    <input
                                        type="file"
                                        onChange={e => _this.props.action.changeFile(e)}
                                        style={{ padding: 20, border: '1px solid #CCC', width: "50%", display: 'inline-block' }}
                                        />
                                </div>
                                <br/><br/><br/><br/>

                                <h1 className="text-center c-font-25">IMAGE</h1>
                                <div>
                                    <p style={{ color: 'red' }} className="text-center">{ _this.props.data.get('error') }</p>
                                </div>
                                <div className="text-center">
                                    <img src={ _this.props.data.get('imageBase64')} />
                                </div>
                                <br/><br/><br/><br/>

                                <h1 className="text-center c-font-25">RESULT</h1>
                                <div>
                                    <table className="table table-condensed table-bordered" style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto'}}>
                                        <tbody>
                                            <tr>
                                                <td width="20%">Plaid</td>
                                                <td width="10%" style={{ textAlign: 'right'}}>{patterns.get('plaid').toFixed(2)}</td>
                                                <td><div style={{ width: (patterns.get('plaid')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                            </tr>
                                            <tr>
                                                <td width="20%">Polka Dots</td>
                                                <td width="10%" style={{ textAlign: 'right'}}>{patterns.get('polka_dots').toFixed(2)}</td>
                                                <td><div style={{ width: (patterns.get('polka_dots')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                            </tr>
                                            <tr>
                                                <td width="20%">Stripe</td>
                                                <td width="10%" style={{ textAlign: 'right'}}>{patterns.get('stripe').toFixed(2)}</td>
                                                <td><div style={{ width: (patterns.get('stripe')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <p className="text-center">* More patterns are coming soon..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlockUi>
            </div>
        )
    }
    componentDidMount() {
        this.props.action.load(this.props.parameters)
    }
}

export default View;

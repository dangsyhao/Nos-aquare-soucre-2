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
                        <div className="row">
                            <div className="col-md-12">
                                <h3>PROBLEM</h3>
                                <pre>
                                    Recognize most common cloth texture pattern: plaid, polka dot, stripe, floral, paisley,...
                                </pre>
                            </div>
                        </div>
                        <div className="row" style={{ paddingTop: 50 }}>
                            <div className="col-md-12">
                                <h3>TEST IMAGES</h3>
                                <div>
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
                                <br/><br/>
                                <h3>TEST WITH YOUR IMAGE (.jpg only)</h3>
                                <input
                                    type="file"
                                    onChange={e => _this.props.action.changeFile(e)}
                                    style={{ padding: 20, border: '1px solid #CCC', width: "100%" }}
                                    />

                                <br/><br/>
                                <h3>IMAGE</h3>
                                <div>
                                    <img src={ _this.props.data.get('imageBase64')} />
                                </div>

                                <h3>RESULT</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td width="10%">Plaid</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{patterns.get('plaid').toFixed(2)}</td>
                                            <td><div style={{ width: (patterns.get('plaid')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Polka Dots</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{patterns.get('polka_dots').toFixed(2)}</td>
                                            <td><div style={{ width: (patterns.get('polka_dots')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Stripe</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{patterns.get('stripe').toFixed(2)}</td>
                                            <td><div style={{ width: (patterns.get('stripe')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <text>* More patterns are coming soon..</text>
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

import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class View extends Component {
    render() {
        var _this = this;
        var categories = _this.props.data.get('categories');
        console.log(categories)
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
                                    Classify upper cloth into 9 common categories: blazer, blouse, cardigan, hoodie, jacket, shirt, sweater, tank, tee
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
                                            <td width="10%">Blazer</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{categories.get('blazer').toFixed(2)}</td>
                                            <td><div style={{ width: (categories.get('blazer')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Blouse</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{categories.get('blouse').toFixed(2)}</td>
                                            <td><div style={{ width: (categories.get('blouse')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Cardigan</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{categories.get('cardigan').toFixed(2)}</td>
                                            <td><div style={{ width: (categories.get('cardigan')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Hoodie</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{categories.get('hoodie').toFixed(2)}</td>
                                            <td><div style={{ width: (categories.get('hoodie')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Jacket</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{categories.get('jacket').toFixed(2)}</td>
                                            <td><div style={{ width: (categories.get('jacket')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Shirt</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{categories.get('shirt').toFixed(2)}</td>
                                            <td><div style={{ width: (categories.get('shirt')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Sweater</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{categories.get('sweater').toFixed(2)}</td>
                                            <td><div style={{ width: (categories.get('sweater')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Tank</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{categories.get('tank').toFixed(2)}</td>
                                            <td><div style={{ width: (categories.get('tank')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                        <tr>
                                            <td width="10%">Tee</td>
                                            <td width="10%" style={{ textAlign: 'right'}}>{categories.get('tee').toFixed(2)}</td>
                                            <td><div style={{ width: (categories.get('tee')*100) + "%", height: 20, backgroundColor: '#FF0000' }}></div></td>
                                        </tr>
                                    </tbody>
                                </table>
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

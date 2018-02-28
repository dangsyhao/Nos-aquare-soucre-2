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

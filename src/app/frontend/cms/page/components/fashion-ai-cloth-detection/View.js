import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class View extends Component {
    render() {
        var _this = this;
        var landmarks = _this.props.data.get('landmarks');
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
                                                    <img src={testImage.base64} style={{ height : 150}}/>
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
                                <h1 className="text-center c-font-25">RESULT</h1>
                                <div className="text-center">
                                    <span style={{ paddingRight: 20 }}><i style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: 'red'}}></i>&nbsp;Right collar</span>
                                    <span style={{ paddingRight: 20 }}><i style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: 'green'}}></i>&nbsp;Left collar</span>
                                    <span style={{ paddingRight: 20 }}><i style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: 'blue'}}></i>&nbsp;Right sleeve</span>
                                    <span style={{ paddingRight: 20 }}><i style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: 'yellow'}}></i>&nbsp;Left sleeve</span>
                                    <span style={{ paddingRight: 20 }}><i style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: 'orange'}}></i>&nbsp;Right hem</span>
                                    <span style={{ paddingRight: 20 }}><i style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: 'cyan'}}></i>&nbsp;Left hem</span>
                                </div>

                                <br/><br/><br/><br/>
                                <div>
                                    <p style={{ color: 'red' }} className="text-center">{ _this.props.data.get('error') }</p>
                                </div>
                                <div>
                                    <div style={{ position: 'relative', marginLeft: '20%'}}>
                                        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: 'red', left: landmarks.get('x0')-4, top: landmarks.get('y0')-4}}></div>
                                        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: 'green', left: landmarks.get('x1')-4, top: landmarks.get('y1')-4}}></div>
                                        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: 'blue', left: landmarks.get('x2')-4, top: landmarks.get('y2')-4}}></div>
                                        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: 'yellow', left: landmarks.get('x3')-4, top: landmarks.get('y3')-4}}></div>
                                        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: 'orange', left: landmarks.get('x4')-4, top: landmarks.get('y4')-4}}></div>
                                        <div style={{ position: 'absolute', width: 8, height: 8, backgroundColor: 'cyan', left: landmarks.get('x5')-4, top: landmarks.get('y5')-4}}></div>
                                        <img src={ _this.props.data.get('imageBase64')} />
                                    </div>
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

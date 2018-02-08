import React, {Component} from 'react';
import renderHTML from 'react-render-html';

class View extends Component {
    render() {
        var _this = this;
        var style = {}
        var data = this.props.data
        style.background = data.get('background')
        style.width = "100%"
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        return (
            <div style={style}>
                <div className="container-fluid">
                    <div className={mclass}>
                        <div className="row">
                            <div className="col-md-12" style={{textAlign: 'center'}}>
                                <h3 style={{fontSize: 35, marginBottom: 30}}>{renderHTML(data.get('title'))}</h3>
                            </div>
                        </div>
                        <div className="row">
                            {
                                data.get('steps').map(function(step, i) {
                                    var html = []
                                    var span = 12 / data.get('steps').size
                                    if (i != data.get('steps').size-1) {
                                        html.push(
                                            <div className={"col-md-" + span} style={{ textAlign: 'center'}}>
                                                <img src={step.icon} width={35}></img>
                                                <div className="owl-item cy-line" style={{ position: 'absolute', right: 0, marginTop: -20}}></div>
                                                <h3 style={{ textAlign: 'center'}}>{renderHTML(step.text)}</h3>
                                            </div>
                                        )
                                    }
                                    else {
                                        html.push(
                                            <div className={"col-md-" + span} style={{ textAlign: 'center'}}>
                                                <img src={step.icon} width={35}></img>
                                                <h3 style={{ textAlign: 'center'}}>{renderHTML(step.text)}</h3>
                                            </div>
                                        )
                                    }
                                    return html
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.action.load(this.props.parameters)
    }
}

export default View;

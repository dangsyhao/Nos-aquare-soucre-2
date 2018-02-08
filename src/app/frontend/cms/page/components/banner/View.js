import React, {Component} from 'react';
import renderHTML from 'react-render-html';

class View extends Component {
    render() {
        var _this = this;
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.height = data.get('height')
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        return (
            <div style={style}>
                <div className="container-fluid claya-banner">
                    <div className="row">
                        <div className={mclass}>
                            <h3 className="c-main-title c-font-45 c-font-bold" style={{marginBottom: 30}}>{renderHTML(data.get('title'))}</h3>
                            <p className="c-font-20 c-line-height-28 c-sub-title" style={{color: '#484848', marginBottom: 30}}>{renderHTML(data.get('subtitle'))}</p>
                            <br/>
                            { data.get('button1Text') ? <a href={data.get('button1Url')} style={{ marginTop: 10 }} className="c-action-btn btn btn-md c-btn-square cy-btn c-btn-blue c-btn-circle"><h3 className="c-font-bold c-font-20">{renderHTML(data.get('button1Text'))}</h3></a> : '' }
                            { data.get('button2Text')  ? <a href={data.get('button2Url')} style={{ marginTop: 10 }} className="c-action-btn btn btn-md c-btn-square cy-btn cy-btn-white c-btn-circle cy-border-white"><h3 className="c-font-bold c-font-20">{renderHTML(data.get('button2Text'))}</h3></a> : '' }
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

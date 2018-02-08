import React, {Component} from 'react';
import renderHTML from 'react-render-html';

class View extends Component {
    renderCenterImage(center_image) {
        switch (center_image) {
            case 'pellet':
                return (
                    <image x="175" y="6%" width="180" xlinkHref="/public/static/claya/image/pellets-01.png"></image>
                )
            case 'made_for_lisa':
                return (
                    <image x="160" y="5%" width="200" height="200" xlinkHref="/public/static/claya/image/Sachet-Mit-NAMEN.png"></image>
                )
        }
        return (
            <image x="160" y="10" width="200" xlinkHref="/public/static/claya/image/Sachet-Mit-NAMEN.png"></image>
        )
    }
    renderMobileImage(mobile_image) {
        switch (mobile_image) {
            case 'pellet':
                return (
                     <img className="img-responsive" src="/public/static/claya/image/pellets-01.png"></img>
                )
            case 'made_for_lisa':
                return (
                     <img className="img-responsive" src="/public/static/claya/image/Sachet-Mit-NAMEN.png"></img>
                )
        }
        return (
             <img className="img-responsive" src="/public/static/claya/image/Sachet-Mit-NAMEN.png"></img>
        )
    }
    render() {
        var _this = this;
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.paddingBottom = data.get('paddingBottom')
        style.paddingTop = data.get('paddingTop')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        return (
            <div style={style}>
                <div className="c-content-feature-4">
                    <div className="container" style={{position: 'relative'}}>
                        { this.renderContent()}
                        { this.renderContentMobile()}
                    </div>
                </div>
            </div>
        )
    }
    renderContent() {
        var _this = this;
        var data = this.props.data

        return (
            <div className="claya-made-for-lisa">
                <div className="c-content-v-center">
                    <svg height="100%" width="100%" viewBox="0 0 500 300">
                        <line x1="380" y1="40" x2="280" y2="100" style={{ stroke: "#e0e0e2", strokeWidth: 0.5}}></line>
                        <line x1="380" y1="170" x2="280" y2="140" style={{ stroke: "#e0e0e2", strokeWidth: 0.5}}></line>
                        <line x1="260" y1="250" x2="260" y2="150" style={{ stroke: "#e0e0e2", strokeWidth: 0.5}}></line>
                        <line x1="150" y1="160" x2="240" y2="140" style={{ stroke: "#e0e0e2", strokeWidth: 0.5}}></line>
                        <line x1="150" y1="60" x2="240" y2="85" style={{ stroke: "#e0e0e2", strokeWidth: 0.5}}></line>
                        <circle cx="380" cy="40" r="2" style={{ stroke: '#42c0bc', strokeWidth: 5, fill: "#42c0bc"}} ></circle>
                        <circle cx="380" cy="170" r="2" style={{ stroke: '#f2576f', strokeWidth: 5, fill: "#f2576f"}} ></circle>
                        <circle cx="260" cy="250" r="2" style={{ stroke: '#a48d83', strokeWidth: 5, fill: "#a48d83"}} ></circle>
                        <circle cx="150" cy="160" r="2" style={{ stroke: '#b2c6b1', strokeWidth: 5, fill: "#b2c6b1"}} ></circle>
                        <circle cx="150" cy="60" r="2" style={{ stroke: '#e7e453', strokeWidth: 5, fill: "#e7e453"}} ></circle>
                        <foreignObject x="350" y="50" width="100" style={{fontSize: 7.5, textAlign: 'center'}}>
                          <h3 style={{fontSize: 8}}>{renderHTML(data.get('title1'))}</h3>
                          <small style={{color: '#3f444a'}}>{renderHTML(data.get('text1'))}</small>
                        </foreignObject>
                        <foreignObject x="340" y="170" width="100" style={{fontSize: 7.5, textAlign: 'center'}}>
                          <h3 style={{fontSize: 8}}>{renderHTML(data.get('title2'))}</h3>
                          <small style={{color: '#3f444a'}}>{renderHTML(data.get('text2'))}</small>
                        </foreignObject>
                        <foreignObject x="215" y="250" width="100" style={{fontSize: 7.5, textAlign: 'center'}}>
                          <h3 style={{fontSize: 8}}>{renderHTML(data.get('title3'))}</h3>
                          <small style={{color: '#3f444a'}}>{renderHTML(data.get('text3'))}</small>
                        </foreignObject>
                        <foreignObject x="100" y="160" width="100" style={{fontSize: 7.5, textAlign: 'center'}}>
                          <h3 style={{fontSize: 8}}>{renderHTML(data.get('title4'))}</h3>
                          <small style={{color: '#3f444a'}}>{renderHTML(data.get('text4'))}</small>
                        </foreignObject>
                        <foreignObject x="100" y="65" width="100" style={{fontSize: 7.5, textAlign: 'center'}}>
                          <h3 style={{fontSize: 8}}>{renderHTML(data.get('title5'))}</h3>
                          <small style={{color: '#3f444a'}}>{renderHTML(data.get('text5'))}</small>
                        </foreignObject>
                        <image x="160" y="5%" width="200" height="200" xlinkHref={data.get('center_image')}></image>
                    </svg>

                </div>
            </div>
        )
    }
    renderContentMobile() {
        var data = this.props.data
        return (
            <div className="c-feature-content claya-made-for-lisa-mobile" style={{width: '100%'}}>
                <div className="col-xs-12" style={{ textAlign: 'center'}}>
                    <div className="row">
                        <div className="col-xs-12">
                            <br/><i className="fa fa-circle c-font-15" style={{color: '#42c0bc'}}></i><br/>
                            <h3>{renderHTML(data.get('title1'))}</h3>
                            <h4 style={{color: '#3f444a'}}>{renderHTML(data.get('text1'))}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <br/><i className="fa fa-circle c-font-15" style={{color: '#f2576f'}}></i><br/>
                            <h3>{renderHTML(data.get('title2'))}</h3>
                            <h4 style={{color: '#3f444a'}}>{renderHTML(data.get('text2'))}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <br/><i className="fa fa-circle c-font-15" style={{color: '#e7e453'}}></i><br/>
                            <h3>{renderHTML(data.get('title3'))}</h3>
                            <h4 style={{color: '#3f444a'}}>{renderHTML(data.get('text3'))}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <br/><i className="fa fa-circle c-font-15" style={{color: '#b2c6b1'}}></i><br/>
                            <h3>{renderHTML(data.get('title4'))}</h3>
                            <h4 style={{color: '#3f444a'}}>{renderHTML(data.get('text4'))}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <br/><i className="fa fa-circle c-font-15" style={{color: '#a48d83'}}></i><br/>
                            <h3>{renderHTML(data.get('title5'))}</h3>
                            <h4 style={{color: '#3f444a'}}>{renderHTML(data.get('text5'))}</h4>
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

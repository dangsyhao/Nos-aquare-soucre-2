import React, {Component} from 'react';
import renderHTML from 'react-render-html';

class View extends Component {
    render() {
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        return (
            <div style={style}>
                <div className="container-fluid claya-your-micronutrient-need">
                    <div className="row">
                        <div className={mclass}>
                            <div className="col-md-7" style={{ }}>
                                <div style={{ width: "100%", height: "100%", position: 'relative'}}>
                                    <svg height="100%" width="100%" viewBox="0 0 500 500">
                                      <image transform="rotate(-60 280 300)" x="280" y="300" width="80" height="80" xlinkHref="/public/static/claya/image/Vector-Smart-Object10.png"></image>
                                      <image transform="rotate(30 200 270)" x="200" y="270" width="80" height="80" xlinkHref="/public/static/claya/image/Vector-Smart-Object11.png"></image>
                                      <image transform="scale(-1,1) rotate(20 -310 270)" x="-310" y="270" width="80" height="80" xlinkHref="/public/static/claya/image/Vector-Smart-Object11.png"></image>
                                      <image transform="rotate(70 190 220)" x="190" y="220" width="80" height="80" xlinkHref="/public/static/claya/image/Vector-Smart-Object10.png"></image>
                                      <image transform="scale(-1,1) rotate(65 -180 140)" x="-180" y="140" width="80" height="80" xlinkHref="/public/static/claya/image/Vector-Smart-Object12.png"></image>
                                      <image transform="rotate(15 230 140)" x="230" y="140" width="50" height="50" xlinkHref="/public/static/claya/image/Vector-Smart-Object4.png"></image>
                                      <image x="300" y="180" width="80" height="80" xlinkHref="/public/static/claya/image/Vector-Smart-Object9.png"></image>
                                      {
                                        data.get('image').map(function(image, i) {
                                          return(
                                            <image x={image.x} y={image.y} width={image.width} height={image.height} xlinkHref={image.url}></image>
                                          )
                                        })
                                      }

                                      <foreignObject x="185" y="210" width="150" height="200"><h3 style={{ textAlign: 'center' }}><b>{data.get('titleLeft')}</b></h3></foreignObject>
                                      {
                                        data.get('text').map(function(reText, i) {
                                          return(
                                            <foreignObject x={reText.x} y={reText.y} width={reText.width} height="200"><h3 style={{ textAlign: 'center', fontSize: 12 }}>{renderHTML(reText.text)}</h3></foreignObject>
                                          )
                                        })
                                      }
                                    </svg>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="c-body">
                                    <div className="c-content-title-1" style={{marginBottom: 20}}>
                                        <h3 className="c-font-bold c-left" style={{fontSize: 33}}>{renderHTML(data.get('titleRight'))}</h3>
                                    </div>
                                    <div className="c-content">
                                        <p className="c-margin-b-60 c-left">
                                            {renderHTML(data.get('textRight'))}
                                        </p>
                                        <div className="c-left">
                                            {data.get('buttonText') != '' ? <a href={data.get('buttonLink')} className="c-action-btn btn btn-md c-btn-square cy-btn cy-btn-white c-btn-circle cy-border-green"><h3 className="c-font-bold c-font-20 cy-btn-green">{ renderHTML(data.get('buttonText'))}</h3></a> : '' }
                                        </div>
                                    </div>
                                </div>
                            </div>
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

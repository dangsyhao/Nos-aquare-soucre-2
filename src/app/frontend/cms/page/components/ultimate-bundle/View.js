import React, {Component} from 'react';
import renderHTML from 'react-render-html';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class View extends Component {
    renderImages(images) {
      if (images.length == 1)
          return (<img src={images[0].url} className="img-responsive"></img>)
      if (images.length > 1) {
          var res = []
          var settingsMobile = {
              infiniteLoop: true,
              showThumbs: true,
              autoPlay: false,
              showIndicators: false,
              showStatus: false
          }
          images.map(function(image, i) {
            res.push(
              <div style={{margin: '0 60px'}} key={i}>
                  <img src={image.url} className="img-responsive"></img>
              </div>
            )
          })
          return (
            <Carousel {...settingsMobile} >{res}</Carousel>
          )
      }
    }

    render() {
        var _this = this;
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')

        var mclass = "col-md-offset-2 col-md-8"

        return (
            <BlockUi tag="div" blocking={this.props.data.get('isBlocking')} style={style}>
                <div className="container-fluid claya-ultimate-bundle">
                    <div className="row">
                        <div className={mclass}>
                            <div className="row">
                                <div className="col-md-7">
                                    <div style={{marginRight: 30}}>
                                        {
                                            this.renderImages(data.get('images'))
                                        }
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="c-body">
                                        <div className="c-content-title-1" style={{marginBottom: 20}}>
                                            <h3 className="c-font-bold c-left" style={{fontSize: 33}}>{renderHTML(data.get('title'))}</h3>
                                        </div>
                                        <div className="c-content">
                                            <ul>
                                                <li style={{padding: 0}}></li>
                                                {
                                                    data.get('list').map(function(li, i) {
                                                        return (
                                                            <li key={i}>
                                                                <i className="icon-check c-font-25"></i>
                                                                <h3 className="c-font-bold c-font-20">{li.title}</h3>
                                                                <p className="c-font-16">{li.text}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="c-left" style={{paddingTop: 30}}>
                                                {data.get('buttonText') != '' ? <a onClick={e => _this.props.action.addToCart(e, _this.props)} className="c-action-btn btn btn-md c-btn-square cy-btn c-btn-green c-btn-circle"><h3 className="c-font-bold c-font-20 cy-btn-green">{ renderHTML(data.get('buttonText'))}</h3></a> : '' }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockUi>
        )
    }
    componentDidMount() {
        this.props.action.load(this.props.parameters)
    }

}

export default View;

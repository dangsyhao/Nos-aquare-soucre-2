import React, {Component} from 'react';
import renderHTML from 'react-render-html';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class View extends Component {
    renderImages(images) {
        if (images.length == 0) {
            return '';
        }
        if (images.length == 1) {
            return (<img src={images[0].url} className="img-responsive" style={{margin: 'auto'}} width="500"></img>)
        }
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
                        <img src={image.url} className="img-responsive" style={{margin: 'auto'}}></img>
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

        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        return (
            <BlockUi tag="div" blocking={this.props.data.get('isBlocking')} style={style}>
                <div className="container-fluid claya-ultimate-bundle">
                    <div className="row">
                        <div className={mclass}>
                            {
                              data.get('layout') == 'image_left' ?
                                  <div className="row">
                                      <div className="col-md-7 vcenter">
                                          <div style={{marginRight: 30}}>
                                              {
                                                  this.renderImages(data.get('images'))
                                              }
                                          </div>
                                      </div>
                                      <div className="col-md-5 vcenter">
                                          <div className="c-body">
                                              {renderHTML(data.get('text'))}
                                          </div>
                                      </div>
                                  </div>
                              :
                              <div className="row">
                                  <div className="col-md-5 vcenter">
                                      <div className="c-body">
                                          {renderHTML(data.get('text'))}
                                      </div>
                                  </div>
                                  <div className="col-md-7 vcenter">
                                      <div style={{marginRight: 30}}>
                                          {
                                              this.renderImages(data.get('images'))
                                          }
                                      </div>
                                  </div>
                              </div>
                            }

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

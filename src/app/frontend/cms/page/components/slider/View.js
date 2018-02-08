import React, {Component} from 'react';
import jQuery from 'jquery';
import { Carousel } from 'react-responsive-carousel';
import renderHTML from 'react-render-html';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class View extends Component {
    renderIndicators() {
      var element = []
      var index = this.props.data.get('selectedItem')
      var total = this.props.data.get('sliders').size
      for (var i = 0; i < total; i++) {
        if (i == index)
          element.push(
            <div style={{padding: '0.6em 1.1em', borderRadius: '2em', margin: '0 0 0 1em', color: '#fff', display: 'inline-block',backgroundColor: '#43c2be'}}><span className="c-font-bold">{i + 1}</span></div>
          )
        else
          element.push(
            <div style={{padding: '0.3em 0.7em', borderRadius: '2em', margin: '0 0 0 1em', color: '#fff', display: 'inline-block',backgroundColor: '#e5e5e5'}}><span className="c-font-bold">{i + 1}</span></div>
          )
      }
      return element
    }
    /*componentWillMount() {
      window.addEventListener("resize", () => this.props.action.setSettings());
    }
    componentWillUnmount() {
      window.removeEventListener("resize", () => this.props.action.setSettings());
    }
    componentDidMount() {
        this.props.action.setSettings();
    }*/
    render() {
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.height = data.get('height')
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        var settings = data.get('settings')
        var sliders = []
        for (var i = 0; i < data.get('sliders').size; i++) {
            var slider = data.get('sliders').get(i)
            sliders.push(
                <div className="c-content-testimonials-13">
                    <div className="c-testimonial" style={{margin: "40px"}}>
                        <div className="c-testimonial-container" style={{padding: 25, borderRadius: 29, backgroundColor: '#fff'}}>
                            <div className="cy-testimonial">
                                <h3 className="c-font-bold c-font-23" style={{marginBottom: 25}}>{slider.title}</h3>
                                <p>{renderHTML(slider.text)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        var settings = {
            infiniteLoop: true,
            showStatus: false,
            showIndicators: false,
            showThumbs: false,
            autoPlay:   false,
            centerMode: true,
            centerSlidePercentage: 35
        }
        var settingsMobile = {
            infiniteLoop: true,
            showStatus: false,
            showIndicators: false,
            showThumbs: false,
            autoPlay: false
        }
        return (
            <div style={style}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><h2 className="c-center c-font-23 c-font-bold" style={{marginBottom: 40}}>{this.props.data.get('title')}</h2></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 c-center">
                          { this.renderIndicators() }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 claya-carousel">
                            <Carousel {...settings} selectedItem={data.get('selectedItem')} onChange={(index) => this.props.action.setItem(index)}>{ sliders }</Carousel>
                        </div>
                        <div className="col-md-12 claya-carousel-mobile">
                            <Carousel {...settingsMobile} selectedItem={data.get('selectedItem')} onChange={(index) => this.props.action.setItem(index)}>{ sliders }</Carousel>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 c-center">
                          <a href={data.get('buttonLink')} className="c-action-btn btn btn-md c-btn-square c-btn-green c-btn-circle"><h3 className="c-font-bold c-font-20">{data.get('buttonText')}</h3></a>
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

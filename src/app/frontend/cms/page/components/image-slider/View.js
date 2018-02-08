import React, {Component} from 'react';
import jQuery from 'jquery';
import { Carousel } from 'react-responsive-carousel';
import renderHTML from 'react-render-html';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class View extends Component {
    componentWillMount() {
      window.addEventListener("resize", () => this.props.action.setSettings());
    }
    componentWillUnmount() {
      window.removeEventListener("resize", () => this.props.action.setSettings());
    }

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
            var _style_image = {}
            var _style_text = {}
            var _style_box = {}
            _style_text.margin = "50px 100px"
            _style_text.display = "none"
            _style_image.margin = "72px 10px"

            if (data.get('selectedItem') == i ) {
              _style_box.margin = "17px -74px"
              _style_text.display = 'block'
              _style_image.margin = "27px 0px"
            }

            sliders.push(
                <div className="c-content-testimonials-13" style={_style_box}>
                    <div className="c-testimonial" style={_style_image}>
                        <div className="c-testimonial-container" style={{padding: 0, borderRadius: 0}}>
                            <img className="box-shadow img-responsive" src={slider.image}></img>
                        </div>
                    </div>
                    <div className="row" style={_style_text}>
                        <div className="col-md-12 c-center">
                          <p>{renderHTML(slider.text)}</p>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div style={style}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12"><h2 className="c-center c-font-40" style={{marginBottom: 40}}>{this.props.data.get('title')}</h2></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" id="image-slider">
                            <Carousel {...settings} selectedItem={data.get('selectedItem')} onChange={(index) => this.props.action.setItem(index)}>{ sliders }</Carousel>
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

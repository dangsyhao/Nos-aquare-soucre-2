import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import renderHTML from 'react-render-html';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class View extends Component {
    render() {
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        var testimonials = []
        for (var i = 0; i < data.get('testimonials').size; i++) {
            var testimonial = data.get('testimonials').get(i)
            testimonials.push(
                <div className="c-content-testimonials-13">
                    <div className="c-testimonial">
                        <div className="c-testimonial-container c-bg-white" style={{padding: 25, borderRadius: 29}}>
                            <div className="row" style={{ padding: 20}}>
                                <div className="col-md-4">
                                    <img src={testimonial.image} style={{width: "80%", height: "80%", borderRadius: '50%'}}></img>
                                </div>
                                <div className="col-md-8">
                                    <p style={{textAlign: 'left', marginTop: 5}}>{renderHTML(testimonial.quote)}</p>
                                    <br/>
                                    <p style={{fontWeight: 500, textAlign: 'left'}}><b style={{color: '#000'}}>{renderHTML(testimonial.name)}</b>, {renderHTML(testimonial.kind)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div style={style}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={mclass}>
                            <Carousel infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false}>{ testimonials }</Carousel>
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

import React, {Component} from 'react';

class View extends Component {
    componentWillMount() {
    }
    render() {
        var _this = this;

        return (
            <section className="job_listing_area bg_color sec_pad" style={{ background: '#FFFFFF'}}>
                <div className="container">
                    <div className="sec_title mb_70">
                        <h2 className="f_p f_size_30 l_height50 f_600 t_color3">Our Technology Stack</h2>
                        <p className="f_400 f_size_16 mb-0">Here are some of the frameworks and technologies that are most frequently used by our team.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="f_p f_size_18 f_500 t_color3 mb_20">Front-end</h3>
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/02.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/03.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/04.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/05.png"} alt="" />
                        </div>

                        <div className="col-md-6">
                            <h3 className="f_p f_size_18 f_500 t_color3 mb_20">Back-end</h3>
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/06.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/07.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/08.png"} alt="" />
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: 50 }}>
                        <div className="col-md-6">
                            <h3 className="f_p f_size_18 f_500 t_color3 mb_20">Frameworks</h3>
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/09.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/10.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/11.png"} alt="" />
                        </div>

                        <div className="col-md-6">
                            <h3 className="f_p f_size_18 f_500 t_color3 mb_20">Databases</h3>
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/12.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/13.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/14.png"} alt="" />
                            <img src={ __params.config['theme-static.url'] + "/img/erp-home/img/15.png"} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default View;

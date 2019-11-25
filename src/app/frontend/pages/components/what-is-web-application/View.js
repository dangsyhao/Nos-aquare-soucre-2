import React, {Component} from 'react';

class View extends Component {
    componentWillMount() {
    }
    render() {
        var _this = this;

        return (
            <section className="design_tab_area sec_pad">
                <div className="container">
                    <div className="sec_title text-center mb_70 wow fadeInUp">
                        <h2 className="f_p f_size_30 l_height50 f_600 t_color3">What is Web Application?</h2>
                        <p className="f_400 f_size_16 mb-0">Strengthen your Brand by providing your Services as a unique custom-built Web-based Application</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                            <ul className="nav nav-tabs design_tab support_tab">
                                <li className="nav-item wow fadeInUp">
                                    <a className="nav-link active" id="one-tab">
                                        <h5>Customer Dashboard</h5>
                                        <p>Strengthen your Brand by providing a custom Customer Dashboard</p>
                                    </a>
                                </li>
                                <li className="nav-item wow fadeInUp">
                                    <a className="nav-link" id="two-tab">
                                        <h5>Web Platform</h5>
                                        <p>Provide your Services as Web-based Software</p>
                                    </a>
                                </li>
                                <li className="nav-item wow fadeInUp">
                                    <a className="nav-link" id="three-tab">
                                        <h5>Business Application</h5>
                                        <p>Automate your business process via Web-accessible Software</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content support_tab_content">
                                <div className="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                                    <div className="tab_img">
                                        <img src={"https://saasland2.droitthemes.com/wp-content/uploads/2019/09/tab_2.png"} />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
                                    <div className="tab_img">
                                        <img src={ __params.config['theme-static.url'] + "/img/new-home/tab.png"} />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
                                    <div className="tab_img">
                                        <img src={ __params.config['theme-static.url'] + "/img/new-home/tab_3.png"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default View;

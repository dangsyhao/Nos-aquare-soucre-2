import React, {Component} from 'react';

class View extends Component {
    componentWillMount() {
    }
    render() {
        var _this = this;

        return (
                <div className="container">
                    <div className="sec_title text-center" style={{ marginBottom: 70 }}>
                        <h2 className="title mb-4">What is Quodbit Core?</h2>
                        <p className="text-muted">Code and Document Analysis and Indexing Engine</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active" style={{ padding: 20 }}>
                                        <h5>Project Modurarisation</h5>
                                        <p>Break your projects into small and managable modules</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ padding: 20, background: '#FFFFFF' }}>
                                        <h5>Source Code Analysis</h5>
                                        <p>Analyse your source code and changes history, detect key attributes</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ padding: 20, background: '#FFFFFF' }}>
                                        <h5>Documentation Analysis</h5>
                                        <p>Read, study and index your project documentation (text, images)</p>
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
        )
    }
}

export default View;

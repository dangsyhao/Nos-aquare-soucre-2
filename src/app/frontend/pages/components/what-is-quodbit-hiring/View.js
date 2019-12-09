import React, {Component} from 'react';

class View extends Component {
    componentWillMount() {
    }
    render() {
        var _this = this;
        var menuId = this.props.data.get('menuId')

        return (
                <div className="container">
                    <div className="sec_title text-center" style={{ marginBottom: 70 }}>
                        <h2 className="title mb-4">Meet Quodbit Hiring</h2>
                        <p className="text-muted">Hire the right developers based on the source code they will be working on</p>
                    </div>
                    <div className="row" style={{ minHeight: 500 }}>
                        <div className="col-lg-4 d-flex align-items-start">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a onClick={e => _this.props.action.setSelectedMenu('job_description_generator')} href="javascript:;" className={"nav-link" + (menuId == 'job_description_generator' ? ' active' : '')} style={{ padding: '10px 10px 0px 20px' }}>
                                        <h5>Job Description Generator</h5>
                                        <p>Automatically generate Job Description based on Source Code</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => _this.props.action.setSelectedMenu('cv_to_project_matching')} href="javascript:;" className={"nav-link" + (menuId == 'cv_to_project_matching' ? ' active' : '')} style={{ padding: '10px 10px 0px 20px' }}>
                                        <h5>Candidates to Project Matching </h5>
                                        <p>Analyse candidates CV and Test Result to match against Projects</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => _this.props.action.setSelectedMenu('technical_test_builder')} href="javascript:;" className={"nav-link" + (menuId == 'technical_test_builder' ? ' active' : '')} style={{ padding: '10px 10px 0px 20px' }}>
                                        <h5>Personalized Test Builder</h5>
                                        <p>Generate the right Technical Test for the project</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content support_tab_content">
                                {
                                    menuId == 'job_description_generator' ?
                                    <div className="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                                        <div className="section-title ml-lg-3">
                                            <h4 className="mb-4">Write accuracy Job Description</h4>
                                            <p className="text-muted">By analyse the project source code, jira tasks database and recent git commits, Quodbit Hiring suggest the right Job Description that will attract the relevant talents for the project</p>
                                            <p className="text-muted">Key functions:</p>
                                            <ul className="list-unstyled feature-list text-muted">
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Automatic Job Description generation based on source code</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Job Post to Projects Compatible Analysis</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Hiring Website Widget / Links that can be embed into your website</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Show to the candidates key technical details of Projects</li>
                                                <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Curated database of 1000+ common Job Description that works</li>
                                            </ul>
                                        </div>
                                    </div> : ''
                                }

                                {
                                    menuId == 'cv_to_project_matching' ?
                                    <div className="tab-pane fade show active" id="two" role="tabpanel" aria-labelledby="two-tab">
                                        <div className="section-title ml-lg-3">
                                            <h4 className="mb-4">Match CV into right projects</h4>
                                            <p className="text-muted">Manually review 10000+ CV to match the candidates to 50+ projects is proving to error, by analysising every projects on your company in detail levels, Quodbit Hiring help HR Managers to discover the potential matching between the candidates and the opening positions</p>
                                            <p className="text-muted">Key functions:</p>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <ul className="list-unstyled feature-list text-muted">
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Analyse and tag candidates CV</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Analyse candidates github</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Analyse candidates LinkedIn</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Generate complete candidates profile</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Candidates to projects matching</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Estimate how long to train developer into the project</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''
                                }

                                {
                                    menuId == 'technical_test_builder' ?
                                    <div className="tab-pane fade show active" id="two" role="tabpanel" aria-labelledby="two-tab">
                                        <div className="section-title ml-lg-3">
                                            <h4 className="mb-4">Generate Test Sheet for each Candidates</h4>
                                            <p className="text-muted">Technical Test from your Test database to estimate the Candidates Technical Profiles, personalized by CV and the Source Code of project he will be working on</p>
                                            <p className="text-muted">Key analysis:</p>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <ul className="list-unstyled feature-list text-muted">
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Analyse your internal Test Database</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Estimate and predict Candidates Technical Expertise</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Personalized generate Test Sheet for each Candidates</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Curated list of 1000+ technical Test Question</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default View;

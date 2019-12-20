import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/page-container/View';
import PageContainerAction from 'frontend-components/page-container/Action';
import PageContainerStore from 'frontend-components/page-container/Store';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')


_pageContainerAction.setSelectedMenu('services')
class ServicesBusinessProcessOptimization extends Component {
    static getStores() {
        return [
            _pageContainerStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:                _pageContainerStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <section className="bg-marketing border-bottom" id="home" style={{ background: 'url("http://landrick.react.themesbrand.com/static/media/marketing-shape.2efcbf45.png")'}}>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="justify-content-center mt-5 row">
                                    <div className="text-center col-md-7 col-lg-7" style={{ paddingTop: 100 }}>
                                        <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h2 className="heading mb-3" style={{ fontSize: 40 }}>Business Process Optimization</h2>
                                            <p className="para-desc text-muted">Documentation, standardize, simplify then automate your business process using our custom-built Software Solution</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section border-bottom" style={{ paddingBottom: 200 }}>
                    <div className="container mt-60">
                        <div className="align-items-center row">
                            <div className="col-md-6 col-lg-5">
                                <img src="http://landrick.react.themesbrand.com/static/media/marketing.6523ea1e.png" style={{ width: '100%'}} />
                            </div>
                            <div className="mt-4 mt-sm-0 pt-2 pt-sm-0 col-md-6 col-lg-7">
                                <div className="section-title ml-lg-5">
                                    <h4 className="title mb-4">Why optimizing the Business Process?</h4>
                                    <p className="text-muted">Standardize and simplify the Business Process is the first step to fully automation world. Custom-built software solution are meant to deliver this desirable result in a most efficient way.</p>
                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Human Resources Cost Reduction</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Repeatable process and stable quality output</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Reduce dependencies on Human (proven to error)</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Scale the operation without substantially increasing in max_salary budget</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Collect and normalize data for Machine Learning Tasks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section border-bottom" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="justify-content-center row">
                            <div className="text-center col">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Work Process</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mt-4 pt-2 col-md-4">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">SOP Analysis</h4>
                                    <p className="text-muted para">We analyse your <span className="text-primary">Standard Operating Procedure</span> document to understand your existing business process as well as associated cost and quality metrics.</p>
                                    <ul className="list-unstyled mb-0 mt-2">
                                        <li className="step font-weight-bold" style={{ fontSize: 30 }}>Step 01.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-4">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Solution Proposal</h4>
                                    <p className="text-muted para">We propose a <span className="text-primary">custom-built</span> software solution to reproduce your business process into a simple and easy to use software interface</p>
                                    <ul className="list-unstyled mb-0 mt-2">
                                        <li className="step font-weight-bold" style={{ fontSize: 30 }}>Step 02.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-4">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Integration</h4>
                                    <p className="text-muted para">Integrate new software solution into your business, then continuously monitor and improve to see the associated <span className="text-primary">cost decreasing</span> and quality increasing.</p>
                                    <ul className="list-unstyled mb-0 mt-2">
                                        <li className="step font-weight-bold" style={{ fontSize: 30 }}>Step 03.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-cta" style={{ background: 'url("http://landrick.react.themesbrand.com/static/media/bg03.4e5a286b.jpg") center center'}} id="cta">
                    <div className="bg-overlay bg-overlay-gradient"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title">
                                    <h4 className="main-title text-white mb-4">Simplification and Automation is the Key</h4>
                                    <p className="text-light para-desc mx-auto">80% Human Resources reduction mean turn a <i>huge-loss</i> into a <b>profitable</b> business. Custom-built solution designed by our <b>full-stack engineers</b> deliver the highest degree of <b>Simplification and Automation</b>, compared to off-the-shell solution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="justify-content-center row">
                            <div className="col">
                                <div className="section-title pb-2">
                                    <h4 className="title">Blog</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mt-4 pt-2 col-md-6 col-lg-4">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/1.10d49531.jpg" className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><a className="title text-dark" href="/index-personal">Form Scanner: streamline the Form Digitalization Process</a></h4>
                                        <div className="post-meta mt-3">
                                            <a className="text-muted float-right readmore" href="/index-personal">Read More <i className="mdi mdi-chevron-right"></i></a>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><a className="text-muted like" href="/index-personal"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                <li className="list-inline-item"><a className="text-muted comments" href="/index-personal"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-4">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/01.716ab2cf.jpg" className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><a className="title text-dark" href="/index-personal">Deep Genome A.I.: speed up the genetic-based product research</a></h4>
                                        <div className="post-meta mt-3">
                                            <a className="text-muted float-right readmore" href="/index-personal">Read More <i className="mdi mdi-chevron-right"></i></a>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><a className="text-muted like" href="/index-personal"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                <li className="list-inline-item"><a className="text-muted comments" href="/index-personal"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-4">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/02.f6ad9413.jpg" className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><a className="title text-dark" href="/index-personal">Not A Square: optimize our software engineering process</a></h4>
                                        <div className="post-meta mt-3">
                                            <a className="text-muted float-right readmore" href="/index-personal">Read More <i className="mdi mdi-chevron-right"></i></a>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><a className="text-muted like" href="/index-personal"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                <li className="list-inline-item"><a className="text-muted comments" href="/index-personal"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mt-4 pt-2 col">
                                <a className="btn btn-primary" href="/page-blog">See More <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

            </PageContainerView>
        )
    }
}
export default Container.create(ServicesBusinessProcessOptimization);

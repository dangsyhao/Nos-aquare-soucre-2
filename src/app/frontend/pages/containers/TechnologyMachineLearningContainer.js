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


_pageContainerAction.setSelectedMenu('technology')
class TechnologyMachineLearningContainer extends Component {
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
                <section className="bg-home border-bottom" id="home" style={{ background: 'url("http://landrick.react.themesbrand.com/static/media/home-shape.dfb81267.png") center center', height: 500 }}>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="justify-content-center row">
                                    <div className="text-center mt-0 mt-md-5 pt-0 col-md-9">
                                        <div className="title-heading margin-top-100" style={{ paddingBottom: 80 }}>
                                            <h1 className="heading mb-3">Machine Learning</h1>
                                            <p className="para-desc mx-auto text-muted">How we scale the system without scaling the human resources.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container mt-60">
                        <div className="align-items-center row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h4 className="title mb-4">How Machine Learning empower <br/><span className="text-primary">Modern</span> Web Application ?</h4>
                                    <p className="text-muted para-desc">
                                        Modern Web Application is supposed to fully automatic, to simplying and automating how we get thing done. Machine Learning is bringing the automation to the last level.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row ml-lg-5" id="counter">
                                    <div className="col-md-6 col-12">
                                        <div className="row">
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-light shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head">Mass Personalization</h4>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-primary shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head" style={{ color: '#FFFFFF'}}>Product Recommendation</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="pt-lg-5 mt-lg-4 row">
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-success shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head"  style={{ color: '#FFFFFF'}}>Object Clustering</h4>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-light shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head">Human-level Automation</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-light" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: 20 }}>
                            <h2 className="title mb-4">Key Components</h2>
                            <p className="text-muted">What is the core components of a Machine Learning based software system</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">The Problem</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Training Data</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Neuron Network</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">GPU-based Platform</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Research Papers</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Scoring Function</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="justify-content-center row">
                            <div className="text-center mt-0  col-md-9">
                                <div className="title-heading" style={{ paddingBottom: 80 }}>
                                    <h2 className=" mb-3">Our Stack</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Library and Framework</h5>
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/02.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/03.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/04.png"} alt="" />
                            </div>
                            <div className="col-md-6">
                                <h5>Platform</h5>
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/06.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/07.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/08.png"} alt="" />
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
                                    <h4 className="main-title text-white mb-4">Machine Learning is automating how we get thing done</h4>
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
                                        <h4><a className="title text-dark" href="/index-personal">BRCNN to detect Fashion Landmarks</a></h4>
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
                                        <h4><a className="title text-dark" href="/index-personal">Multi-Task Learning for Fashion Tagging</a></h4>
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
                                        <h4><a className="title text-dark" href="/index-personal">Quodbit: ML for Code, to solve real-world problem</a></h4>
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
export default Container.create(TechnologyMachineLearningContainer);

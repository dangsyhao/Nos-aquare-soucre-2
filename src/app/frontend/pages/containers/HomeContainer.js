import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/page-container/View';
import PageContainerAction from 'frontend-components/page-container/Action';
import PageContainerStore from 'frontend-components/page-container/Store';
//status
import StatusView from '../components/status/View';
import StatusAction from '../components/status/Action';
import StatusStore from '../components/status/store';
//
const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container');
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container');
//status
const _StatusAction = new StatusAction(_dispatcher,"call_status_action");
const _StatusStore = new StatusStore(_dispatcher,"call_status_action");

_pageContainerAction.setSelectedMenu('home');
class HomeContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _StatusStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:        _pageContainerStore.getState(),
            statusStore:                 _StatusStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <section className="bg-half-170 border-bottom agency-wrapper" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-7 order-1 order-md-2">
                                        <div className="title-heading mt-4 ml-lg-5">
                                            <h1 className="heading mb-3">We are <span className="text-primary">Full-Stack</span><br/> Software Agency</h1>
                                            <p className="para-desc text-muted">We provide an all-in-one custom software development services for SME and start-ups, everything you need to launch and scale your business.</p>
                                            <div className="watch-video mt-4 pt-2">
                                                <a href="javascript:void(0)" className="btn btn-primary">Learn More <i className="mdi mdi-chevron-right"></i></a>
                                            </div>
                                            <div style={{marginTop:10}}>
                                                <StatusView
                                                    action={_StatusAction}
                                                    data ={this.state.statusStore}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <img src="https://s3.amazonaws.com/notasquare-themes/landrick-1.5.0/images/illustrator/working_with_computer.svg" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">What We Do ?</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src="https://s3.amazonaws.com/notasquare-themes/landrick-1.5.0/images/icon/pen.svg" alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Business Process Optimization</h4>
                                        <p className="text-muted mb-0">Analyse, Optimize, Automate, Enhance your Business Process Efficiency using Custom-built Software Solution</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-12 mt-5 mt-sm-0">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src="https://s3.amazonaws.com/notasquare-themes/landrick-1.5.0/images/icon/video.svg" alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Web Application Development</h4>
                                        <p className="text-muted mb-0">Strengthen your Brand by providing your Services as a unique custom-built Web-based Application</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-12 mt-5 mt-sm-0">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src="https://s3.amazonaws.com/notasquare-themes/landrick-1.5.0/images/icon/video.svg" alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Product Development</h4>
                                        <p className="text-muted mb-0">Research the market, find the problem, launch and scale the Product in form of Software-as-a-services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section bg-light" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Our Domains</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Top domain industries we focus on</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Software as a Services</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-internet-explorer text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Business Productivity</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-cryengine text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Developer Tools</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-bootstrap text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">e-Learning</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-cube-outline text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Machine Learning</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-sass text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Software Engineering</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" style={{ paddingBottom: 200 }}>
                    <div className="container pt-50">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Our Latest Projects</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">More than 50+ custom software solution, from interactive web application to trained-from-the-scratch AI-powered software system</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mt-4 pt-2">
                                <div className="work-container position-relative rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src="https://via.placeholder.com/800X533//88929f/5a6270C/O%20https://placeholder.com/" className="img-fluid rounded" alt="work-image" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <a href="page_work_detail.html" className="title text-white d-block font-weight-bold">Rootine</a>
                                            <small className="text-light">Web Application</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Rachel Sander</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-4 pt-2">
                                <div className="work-container position-relative rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src="https://via.placeholder.com/800X533//88929f/5a6270C/O%20https://placeholder.com/" className="img-fluid rounded" alt="work-image" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <a href="page_work_detail.html" className="title text-white d-block font-weight-bold">Form Scanner</a>
                                            <small className="text-light">Business Productivity</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Novogenia</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-4 pt-2">
                                <div className="work-container position-relative rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src="https://via.placeholder.com/800X533//88929f/5a6270C/O%20https://placeholder.com/" className="img-fluid rounded" alt="work-image" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <a href="page_work_detail.html" className="title text-white d-block font-weight-bold">Quodbit A.I.</a>
                                            <small className="text-light">Developer Tools</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Not A Square</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-4 pt-2">
                                <div className="work-container position-relative rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src="https://via.placeholder.com/800X533//88929f/5a6270C/O%20https://placeholder.com/" className="img-fluid rounded" alt="work-image" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <a href="page_work_detail.html" className="title text-white d-block font-weight-bold">Biogena App</a>
                                            <small className="text-light">Mobile Application</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Biogena</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mt-4 pt-2">
                                <a href="page_work.html" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></a>
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
                                    <h4 className="main-title text-white mb-4">We Never Stop Innovating</h4>
                                    <p className="text-light para-desc mx-auto">Software is eating the world, simplifying then automating the way we get thing done. At our core, we are continuously and actively looking for innovative ideas, then implement software solution to simplify (or automate, if <b style={{ textDecoration: 'line-through'}}>possible</b> <i>there are enough training data</i>) the way human get work done</p>
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
                                        <h4><a className="title text-dark" href="/index-personal">Full-Stack Developers are the future of Software Development</a></h4>
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
                                        <h4><a className="title text-dark" href="/index-personal">Why Product Teams need Full-Stack Software Agency ?</a></h4>
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
                                        <h4><a className="title text-dark" href="/index-personal">How Quodbit A.I. simplify Software Development</a></h4>
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

export default Container.create(HomeContainer);

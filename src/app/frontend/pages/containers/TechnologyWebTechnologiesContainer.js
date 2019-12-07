import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/page-container/View';
import PageContainerAction from 'frontend-components/page-container/Action';
import PageContainerStore from 'frontend-components/page-container/Store';
import WhatIsWebApplicationView from '../components/what-is-web-application/View';
import WhatIsWebApplicationAction from '../components/what-is-web-application/Action';
import WhatIsWebApplicationStore from '../components/what-is-web-application/Store';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _whatIsWebApplicationStore = new WhatIsWebApplicationStore(_dispatcher, 'what-is-web-application')
const _whatIsWebApplicationAction = new WhatIsWebApplicationAction(_dispatcher, 'what-is-web-application')


_pageContainerAction.setSelectedMenu('technology')
class TechnologyWebTechnologiesContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _whatIsWebApplicationStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:                _pageContainerStore.getState(),
            whatIsWebApplication:         _whatIsWebApplicationStore.getState(),
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
                                            <h1 className="heading mb-3">Web Technology</h1>
                                            <p className="para-desc mx-auto text-muted">Increase the profitability, availability, and efficiency of your business via the relevant web development solutions with the scalable architecture using the latest technologies and trends.</p>
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
                                    <h4 className="title mb-4">What is required from the <br/><span className="text-primary">Modern</span> Web Application ?</h4>
                                    <p className="text-muted para-desc">
                                        Without limiting our client functional requirements, we continuously research and integrate cutting-edge and modern technologies to ensure best user experience in your final product
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row ml-lg-5" id="counter">
                                    <div className="col-md-6 col-12">
                                        <div className="row">
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-light shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head">Scalability</h4>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-primary shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head" style={{ color: '#FFFFFF'}}>Aesthetic Design</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="pt-lg-5 mt-lg-4 row">
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-success shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head"  style={{ color: '#FFFFFF'}}>UI/UX</h4>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-light shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head">Responsive</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-light">
                    <WhatIsWebApplicationView
                        data={this.state.whatIsWebApplication}
                        action={_whatIsWebApplicationAction}
                    />
                </section>


                <section className="section" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="justify-content-center row">
                            <div className="text-center mt-0  col-md-9">
                                <div className="title-heading" style={{ paddingBottom: 80 }}>
                                    <h2 className=" mb-3">Our Technology Stack</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Front-end</h5>
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/02.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/03.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/04.png"} alt="" />
                            </div>
                            <div className="col-md-4">
                                <h5>Back-end</h5>
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/06.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/07.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/08.png"} alt="" />

                            </div>
                            <div className="col-md-4">
                                <h5>Frameworks and Library</h5>
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/09.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/10.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/11.png"} alt="" />
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
                                    <h4 className="main-title text-white mb-4">A mixture between Stability and Experimental </h4>
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
                                    <h4 className="main-title mb-4">Features Web Application</h4>
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
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mt-4 pt-2">
                                <a href="page_work.html" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

            </PageContainerView>
        )
    }
}
export default Container.create(TechnologyWebTechnologiesContainer);

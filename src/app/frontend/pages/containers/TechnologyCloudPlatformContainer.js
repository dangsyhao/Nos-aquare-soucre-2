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
class TechnologyCloudPlatformContainer extends Component {
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
                                            <h1 className="heading mb-3">Cloud Platform</h1>
                                            <p className="para-desc mx-auto text-muted">The core foundation to deploy and operate our software products.</p>
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
                                    <h4 className="title mb-4">How Cloud Platform enable <br/><span className="text-primary">Modern</span> Web Application ?</h4>
                                    <p className="text-muted para-desc">
                                        Modern Web Application is supposed to serve a massive scale audience, a strong Cloud Platform is a must to enable the operation of web applications.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row ml-lg-5" id="counter">
                                    <div className="col-md-6 col-12">
                                        <div className="row">
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-light shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head">Scalability and Availability</h4>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-primary shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head" style={{ color: '#FFFFFF'}}>Continuous Integration</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="pt-lg-5 mt-lg-4 row">
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-success shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head"  style={{ color: '#FFFFFF'}}>Security and Logging</h4>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2 col-12 col">
                                                <div className="counter-box position-relative counter-border bg-light shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h4 className="counter-head">Monitoring and Recovery</h4>
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
                            <h2 className="title mb-4">Platform-as-a-services</h2>
                            <p className="text-muted">We integrate and handpick core tools to ensemble a custom PaaS which is the key to our CI/CD and DevOps system. This enable us a very fast-paced software development, allow us to release and integrate new changes every hours.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Source Code Management</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Continuous Integration</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Docker-based Packaging</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Configuration Management</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Service Discovery</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Process Management</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Logging and Monitoring</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Metrics and Visualization</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Security</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Load Balancing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">High Scalability</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Build Automation</h4>
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
                                    <h2 className=" mb-3">Our DevOps Stack</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h5>CASE Tools</h5>
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/02.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/03.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/04.png"} alt="" />
                            </div>
                            <div className="col-md-4">
                                <h5>Build Tools</h5>
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/06.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/07.png"} alt="" />
                                <img style={{ border: '1px solid #eee', marginRight: 15 }} src={ __params.config['theme-static.url'] + "/img/erp-home/img/08.png"} alt="" />
                            </div>
                            <div className="col-md-4">
                                <h5>Cloud Platform</h5>
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
                                    <h4 className="main-title text-white mb-4">Continuous Integration is the key of Full-stack Development</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" style={{ paddingBottom: 500 }}>
                </section>

            </PageContainerView>
        )
    }
}
export default Container.create(TechnologyCloudPlatformContainer);

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
class AboutUsPortfolioContainer extends Component {
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
                <section className="bg-marketing" id="home" style={{ background: 'url("http://landrick.react.themesbrand.com/static/media/marketing-shape.2efcbf45.png")'}}>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="justify-content-center mt-5 row">
                                    <div className="text-center col-md-7 col-lg-7" style={{ paddingTop: 100 }}>
                                        <img src="http://landrick.react.themesbrand.com/static/media/youtube-media.2dc9510b.svg" className="img-fluid" alt="" style={{ maxHeight: 150 }} />
                                        <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h1 className="heading mb-3">Portfolio</h1>
                                            <p className="para-desc text-muted">More than 50+ custom software solution, from interactive web application to trained-from-the-scratch AI-powered software system.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="counter" className="row">
                                    <div className="col-6 mt-4 pt-2 col-md-3">
                                        <div className="counter-box text-center">
                                            <img src="http://landrick.react.themesbrand.com/static/media/Asset190.3668c838.svg" height="70" alt="" />
                                            <h2 className="mb-0 mt-3">
                                                <span className="counter-value" data-count="97"><span>3</span></span>
                                            </h2>
                                            <h5 className="counter-head text-muted">Year in business</h5>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-4 pt-2 col-md-3">
                                        <div className="counter-box text-center">
                                            <img src="http://landrick.react.themesbrand.com/static/media/Asset190.3668c838.svg" height="70" alt="" />
                                            <h2 className="mb-0 mt-3">
                                                <span className="counter-value" data-count="97"><span>25</span></span>
                                            </h2>
                                            <h5 className="counter-head text-muted">Projects</h5>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-4 pt-2 col-md-3">
                                        <div className="counter-box text-center">
                                            <img src="http://landrick.react.themesbrand.com/static/media/Asset190.3668c838.svg" height="70" alt="" />
                                            <h2 className="mb-0 mt-3">
                                                <span className="counter-value" data-count="97"><span>1.000.000+</span></span>
                                            </h2>
                                            <h5 className="counter-head text-muted">Line of Code</h5>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-4 pt-2 col-md-3">
                                        <div className="counter-box text-center">
                                            <img src="http://landrick.react.themesbrand.com/static/media/Asset190.3668c838.svg" height="70" alt="" />
                                            <h2 className="mb-0 mt-3">
                                                <span className="counter-value" data-count="97"><span>10.260</span></span>
                                            </h2>
                                            <h5 className="counter-head text-muted">Cups of Coffee</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section border-top" style={{ paddingTop: 100, paddingBottom: 100 }}>
                    <div className="container">
                        <div className="row">
                            <ul className="col container-filter list-unstyled categories-filter text-center" id="filter">
                                <li className="list-inline-item">
                                    <a className="categories border d-block text-dark rounded active" href="/index-portfolio">All</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="categories border d-block text-dark rounded" href="/index-portfolio">Business Application</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="categories border d-block text-dark rounded" href="/index-portfolio">Web Application</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="categories border d-block text-dark rounded" href="/index-portfolio">Web Design</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="categories border d-block text-dark rounded" href="/index-portfolio">Mobile Application</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="categories border d-block text-dark rounded" href="/index-portfolio">Machine Learning</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="container-grid projects-wrapper row">
                            <div className="spacing designing col-md-6 col-lg-3">
                                <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                    <a className="mfp-image d-inline-block" target="_blank" title="" href="http://landrick.react.themesbrand.com/work/13.jpg">
                                        <img src="http://landrick.react.themesbrand.com/static/media/13.992f5ffb.jpg" className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                    </a>
                                    <div className="content personal-port">
                                        <a className="title text-white d-block font-weight-bold" href="/page-work-detail">Shifting Perspective</a>
                                        <small className="text-light">Studio</small>
                                    </div>
                                    <div className="client personal-port">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="spacing designing col-md-6 col-lg-3">
                                <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                    <a className="mfp-image d-inline-block" target="_blank" title="" href="http://landrick.react.themesbrand.com/work/13.jpg">
                                        <img src="http://landrick.react.themesbrand.com/static/media/13.992f5ffb.jpg" className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                    </a>
                                    <div className="content personal-port">
                                        <a className="title text-white d-block font-weight-bold" href="/page-work-detail">Shifting Perspective</a>
                                        <small className="text-light">Studio</small>
                                    </div>
                                    <div className="client personal-port">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="spacing designing col-md-6 col-lg-3">
                                <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                    <a className="mfp-image d-inline-block" target="_blank" title="" href="http://landrick.react.themesbrand.com/work/13.jpg">
                                        <img src="http://landrick.react.themesbrand.com/static/media/13.992f5ffb.jpg" className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                    </a>
                                    <div className="content personal-port">
                                        <a className="title text-white d-block font-weight-bold" href="/page-work-detail">Shifting Perspective</a>
                                        <small className="text-light">Studio</small>
                                    </div>
                                    <div className="client personal-port">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="spacing designing col-md-6 col-lg-3">
                                <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                    <a className="mfp-image d-inline-block" target="_blank" title="" href="http://landrick.react.themesbrand.com/work/13.jpg">
                                        <img src="http://landrick.react.themesbrand.com/static/media/13.992f5ffb.jpg" className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                    </a>
                                    <div className="content personal-port">
                                        <a className="title text-white d-block font-weight-bold" href="/page-work-detail">Shifting Perspective</a>
                                        <small className="text-light">Studio</small>
                                    </div>
                                    <div className="client personal-port">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" style={{ paddingBottom: 300 }}>
                    <div className="container">
                        <div className="justify-content-center mt-5 row">
                            <div className="text-center col-md-7 col-lg-7" style={{ paddingTop: 0 }}>
                                <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h4 className="mb-3">..all are built <span className="text-primary">single-handledly</span> by our current (or former) <span className="text-primary">top-tier</span> Full-Stack Developers</h4>
                                    <span className="badge badge-outline-primary rounded" style={{ marginRight: 10 }}>vaquan</span>
                                    <span className="badge badge-outline-light rounded" style={{ marginRight: 10 }}>nhkhoi</span>
                                    <span className="badge badge-outline-light rounded" style={{ marginRight: 10 }}>tdquang</span>
                                    <span className="badge badge-outline-light rounded" style={{ marginRight: 10 }}>thtrang</span>
                                    <span className="badge badge-outline-primary rounded" style={{ marginRight: 10 }}>dnhai</span>
                                    <span className="badge badge-outline-primary rounded" style={{ marginRight: 10 }}>dnlinh</span>
                                    <span className="badge badge-outline-primary rounded" style={{ marginRight: 10 }}>hncanh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </PageContainerView>
        )
    }
}
export default Container.create(AboutUsPortfolioContainer);

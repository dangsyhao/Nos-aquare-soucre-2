import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/container/View';
import PageContainerAction from 'frontend-components/container/Action';
import PageContainerStore from 'frontend-components/container/Store';
import HomeCaseStudyView from './../components/home-case-study/View';
import HomeCaseStudyAction from './../components/home-case-study/Action';
import HomeCaseStudyStore from './../components/home-case-study/Store';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _homeCaseStudyStore = new HomeCaseStudyStore(_dispatcher, 'home-case-study')
const _homeCaseStudyAction = new HomeCaseStudyAction(_dispatcher, 'home-case-study')

class HomeContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _homeCaseStudyStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:        _pageContainerStore.getState(),
            homeCaseStudy:        _homeCaseStudyStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <section className="agency_banner_area bg_color">
                    <img className="banner_shap" src="/public/static/banner_bg.png" alt="" />
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-5 d-flex align-items-center">
                                <div className="agency_content">
                                    <h2 className="f_700 t_color3 mb_40 wow fadeInLeft" data-wow-delay="0.3s">Full-Stack Custom Software Development</h2>
                                    <p className="f_400 l_height28 wow fadeInLeft" data-wow-delay="0.4s">We provide an all-in-one custom software development services for SME and start-ups, everything you need to launch and scale your business!</p>
                                    <div className="action_btn d-flex align-items-center mt_60">
                                        <a href="#" className="btn_hover agency_banner_btn wow fadeInLeft" data-wow-delay="0.5s">Let{"'"}s talk about your Business</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 text-right">
                                <img className="protype_img wow fadeInRight" data-wow-delay="0.3s" src="/public/static/banner_img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="erp_analytics_area" style={{ background: __params.config['theme-static.url'] + '/img/erp-home/background.png'}} style={{ height: 680, marginTop: -350 }}>
                </section>

                <section className="prototype_service_info" style={{ marginTop: 100, marginBottom: 200 }}>
                    <div className="symbols-pulse active">
                        <div className="pulse-1"></div>
                        <div className="pulse-2"></div>
                        <div className="pulse-3"></div>
                        <div className="pulse-4"></div>
                        <div className="pulse-x"></div>
                    </div>
                    <div className="container">
                        <h2 className="f_size_30 f_600 t_color3 l_height45 text-center mb_90">What We Do</h2>
                        <div className="row p_service_info">
                            <div className="col-lg-4 col-sm-6">
                                <div className="p_service_item pr_70">
                                    <div className="icon icon_one"><i className="ti-panel"></i></div>
                                    <h5 className="f_600 f_p t_color3">Business Process Optimization</h5>
                                    <p className="f_400">Analyse, Optimize, Automate, Enhance your Business Process Efficiency using Custom-built Software Solution</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="p_service_item pl_50 pr_20">
                                    <div className="icon icon_two"><i className="ti-layout-grid2"></i></div>
                                    <h5 className="f_600 f_p t_color3">Web Application Development</h5>
                                    <p className="f_400">Strengthen your Brand by providing your Services as a unique custom-built Web-based Application</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="p_service_item pl_70">
                                    <div className="icon icon_three"><i className="ti-fullscreen"></i></div>
                                    <h5 className="f_600 f_p t_color3">Mobile Application Development</h5>
                                    <p className="f_400">Connect to your End User as a unique custom-built native Mobile Application</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="support_integration_area">
                    <div className="container">
                        <div className="sec_title text-center mb_70 wow fadeInUp">
                            <h2 className="f_p f_size_30 l_height50 f_600 t_color3">Our Domains</h2>
                            <p className="f_400 f_size_16 mb-0">Top domain industries we focus on...</p>
                        </div>
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 col-md-10 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="s_integration_item">
                                            <img src={ __params.config['theme-static.url'] + "/img/new-home/kissmetrics.png" } alt="" />
                                            <h5>SaaS</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="s_integration_item">
                                            <img src={ __params.config['theme-static.url'] + "/img/new-home/metorik.png" } alt="" />
                                            <h5>Business Productivity</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="s_integration_item">
                                            <img src={ __params.config['theme-static.url'] + "/img/new-home/nicereply-1.png" } alt="" />
                                            <h5>Developer Tools</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="s_integration_item">
                                            <img src={ __params.config['theme-static.url'] + "/img/new-home/campfire.png" } alt="" />
                                            <h5>eCommerce</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="s_integration_item">
                                            <img src={ __params.config['theme-static.url'] + "/img/new-home/webhooks.png" } alt="" />
                                            <h5>Machine Learning</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="s_integration_item">
                                            <img src={ __params.config['theme-static.url'] + "/img/new-home/briteverify.png" } alt="" />
                                            <h5>Health and Wellness</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-sm-12">
                                <img className="integration_img" src={ __params.config['theme-static.url'] + "/img/new-home/tree.png" } alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <HomeCaseStudyView data={this.state.homeCaseStudy} action={_homeCaseStudyAction} />


                <section className="action_area_three sec_pad">
                    <div className="curved"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="action_content text-center">
                                    <h2 className="f_600 f_size_30 l_height45 mb_40">{"Let's talk abour your Project"}?</h2>
                                    <a href="#" className="about_btn white_btn wow fadeInLeft">Just SaasLand IT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="erp_customer_logo_area">
                    <div className="container">
                        <div className="hosting_title erp_title text-center">
                            <h2>Our Technologies</h2>
                        </div>
                        <ul className="list-unstyled animation_inner">
                            <li className="wow slideInnew2"><img src={ "/public/static/technology/001.png"} style={{ width: 80 }} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/02.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/03.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/04.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/05.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/06.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/07.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/08.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/09.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/10.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/11.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/12.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/13.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/14.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/15.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/16.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/17.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/18.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/19.png"} alt="" /></li>
                            <li className="wow slideInnew2"><img src={ __params.config['theme-static.url'] + "/img/erp-home/img/20.png"} alt="" /></li>
                        </ul>
                        <div className="text-center">
                            <a href="#" className="er_btn">Our Technology Stack</a>
                        </div>
                    </div>
                </section>
            </PageContainerView>
        )
    }
}

export default Container.create(HomeContainer);

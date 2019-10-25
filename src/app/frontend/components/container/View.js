import React, {Component} from 'react';
import jQuery from 'jquery';
import { translate } from 'react-i18next';
import renderHTML from 'react-render-html';

class View extends Component {
    componentWillMount() {
    }
    componentDidMount() {
        this.props.action.load()
    }
    render() {
        var _this = this;
        var p = []
        var t = this.props.t;

        return (
            <div className="body_wrapper">
                <header className="header_area">
                    <nav className="navbar navbar-expand-lg menu_one menu_four">
                        <div className="container custom_container p0">
                            <a className="navbar-brand" href="#"><img src="/public/static/logo.png" style={{ width: 200 }} /></a>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
                                    <li className="nav-item dropdown submenu mega_menu mega_menu_two active">
                                        <a className="nav-link dropdown-toggle" href="javascript:;">
                                            Home
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <section className="agency_banner_area bg_color">
                    <img className="banner_shap" src="https://s3.amazonaws.com/notasquare-themes/saasland-20191016/img/home4/banner_bg.png" alt="" />
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-5 d-flex align-items-center">
                                <div className="agency_content">
                                    <h2 className="f_700 t_color3 mb_40 wow fadeInLeft" data-wow-delay="0.3s">Full-Stack Custom Software Development</h2>
                                    <p className="f_400 l_height28 wow fadeInLeft" data-wow-delay="0.4s">We provide an all-in-one custom software development services for SME and start-ups, everything you need to launch and scale your start-up!</p>
                                    <div className="action_btn d-flex align-items-center mt_60">
                                        <a href="#" className="btn_hover agency_banner_btn wow fadeInLeft" data-wow-delay="0.5s">Let{"'"}s talk about your Business</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 text-right">
                                <img className="protype_img wow fadeInRight" data-wow-delay="0.3s" src="http://droitthemes.com/html/saasland/img/home4/banner_img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>



                <section className="prototype_service_info" style={{ marginTop: 100 }}>
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
                                    <h5 className="f_600 f_p t_color3">Enterprise Software Development</h5>
                                    <p className="f_400">Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="p_service_item pl_50 pr_20">
                                    <div className="icon icon_two"><i className="ti-layout-grid2"></i></div>
                                    <h5 className="f_600 f_p t_color3">Web Application Development</h5>
                                    <p className="f_400">Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="p_service_item pl_70">
                                    <div className="icon icon_three"><i className="ti-fullscreen"></i></div>
                                    <h5 className="f_600 f_p t_color3">Mobile Application Development</h5>
                                    <p className="f_400">Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="p_service_item pr_70">
                                    <div className="icon icon_four"><i className="ti-vector"></i></div>
                                    <h5 className="f_600 f_p t_color3">Scale and Optimization</h5>
                                    <p className="f_400">Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="p_service_item pl_50 pr_20">
                                    <div className="icon icon_five"><i className="ti-cloud-down"></i></div>
                                    <h5 className="f_600 f_p t_color3">Cloud Service</h5>
                                    <p className="f_400">Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="p_service_item pl_70">
                                    <div className="icon icon_six"><i className="ti-bolt"></i></div>
                                    <h5 className="f_600 f_p t_color3">Research and Development</h5>
                                    <p className="f_400">Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <footer className="footer_area footer_area_four f_bg" style={{ marginTop: 100 }}>
                    <div className="footer_bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-5 col-sm-6">
                                    <p className="mb-0 f_400">Copyright © 2018 Desing by <a href="#">DroitThemes</a></p>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-6">
                                    <div className="f_social_icon_two text-center">
                                        <a href="#"><i className="ti-facebook"></i></a>
                                        <a href="#"><i className="ti-twitter-alt"></i></a>
                                        <a href="#"><i className="ti-vimeo-alt"></i></a>
                                        <a href="#"><i className="ti-pinterest"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <ul className="list-unstyled f_menu text-right">
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>
        )
    }
}

export default translate()(View);

import React, {Component} from 'react';
import jQuery from 'jquery';
import { translate } from 'react-i18next';
import renderHTML from 'react-render-html';

class View extends Component {
    componentWillMount() {
        jQuery(document).ready(function () {
            var _this = this;
            var offset = parseInt(jQuery('.c-layout-header').attr('data-minimize-offset') > 0 ? parseInt($('.c-layout-header').attr('data-minimize-offset')) : 0);
            var _handleHeaderOnScroll = function () {
                if (jQuery(window).scrollTop() > offset) {
                    jQuery("body").addClass("c-page-on-scroll");
                    jQuery("header").css("opacity", 0.8);
                    jQuery("header").css("top", 0);
                }
                else {
                    jQuery("body").removeClass("c-page-on-scroll");
                    jQuery("header").css("opacity", 1);
                    jQuery("header").css("top", 'inherit');
                }
            }
            var _handleTopbarCollapse = function () {
                jQuery('.c-layout-header .c-topbar-toggler').on('click', function (e) {
                    jQuery('.c-layout-header-topbar-collapse').toggleClass("c-topbar-expanded");
                });
            }
            if (jQuery('body').hasClass('c-layout-header-fixed-non-minimized')) {
                return;
            }

            _handleHeaderOnScroll();
            _handleTopbarCollapse();
            jQuery(window).scroll(function () {
                _handleHeaderOnScroll();
            });
        });

    }
    componentDidMount() {
        this.props.action.load()
    }
    renderMobileMenu() {
        var t = this.props.t;
        var elements = []
        elements.push(<li><a href="/notasquare" className="c-link">{t('page_menu_notasquare')}</a></li>)
        elements.push(<li><a href="/how-to-personalization" className="c-link">{t('page_menu_how_to_personalization')}</a></li>)
        elements.push(<li><a href="/about-us" className="c-link">{t('page_menu_about_us')}</a></li>)
        elements.push(<li><a href="/customer" className="c-link">{t('page_menu_our_customer')}</a></li>)
        return elements
    }
    render() {
        var _this = this;
        var p = []
        var t = this.props.t;
        console.log("-->", t);

        return (
            <div>
                <div className="c-size-md cy-theme-bg">
                    <div className="container">
                        <div className="cy-top-header">
                            <h3 className="c-font-white c-font-16" style={{margin: '5px 0'}}>{t('page_headline')}</h3>
                        </div>
                    </div>
                </div>
                <header className="c-layout-header c-layout-header-onepage c-layout-header-7 c-layout-header-default-mobile c-header-transparent-dark" style={{top: 'inherit'}}>
                    <div className="c-navbar">
                        <div className="container-fluid">
                            <div className="c-navbar-wrapper clearfix">
                                <div className="c-brand c-pull-left">
                                    <a href="/" className="c-logo">
                                        <img src="/public/static/claya/logo/logo-white.png" alt="JANGO" className="c-desktop-logo" width="120"></img>
                                        <img src="/public/static/claya/logo/logo1.png" style={{ marginTop: -7 }} alt="JANGO" className="c-desktop-logo-inverse" width="100"></img>
                                        <img src="/public/static/claya/logo/logo1.png" alt="JANGO" className="c-mobile-logo" width="100"></img>
                                    </a>
                                    <button className="c-hor-nav-toggler" type="button" data-target=".c-mega-menu" onClick={e => this.props.action.toggleMobileMenu()}>
                                        <span className="c-line"></span>
                                        <span className="c-line"></span>
                                        <span className="c-line"></span>
                                    </button>
                                </div>

                                {
                                    this.props.pageContainer.get('isShowMobileMenu') ?
                                    <nav className="c-mega-menu c-mega-menu-onepage c-mega-menu-dark-mobile c-mega-menu-dark c-fonts-uppercase">
                                        <ul className="nav navbar-nav c-theme-nav nav-margin-left">
                                            { this.renderMobileMenu()}
                                        </ul>
                                    </nav> :
                                    ''
                                }

                                <nav className="c-mega-menu c-mega-menu-onepage c-mega-menu-dark c-fonts-uppercase">
                                    <ul className="nav navbar-nav c-theme-nav nav-margin-left">
                                        <li><a href="/fashion-ai" className="c-link">{t('page_menu_fashion_ai')}</a></li>
                                        <li><a href="/portfolio" className="c-link">{t('page_menu_portfolio')}</a></li>
                                        <li><a href="/about-us" className="c-link">{t('page_menu_about_us')}</a></li>                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="extra-nav-bar" style={{backgroundColor: '#fafafa22', display: this.props.pageContainer.get('isHelp') ? 'block':'none'}}>
                            <div style={{width: 880, margin: '0px auto'}}>
                                <ul style={{listStyle: 'none', padding: '36px 20px'}}>
                                    <li style={{display: 'inline', marginRight: 100, color: '#FFFFFF'}}><a className="c-link" href={"mailto:" + t('page_menu_email') }><i className="icon-envelope c-font-20" style={{ verticalAlign: -3}}></i>&nbsp;&nbsp; {t('page_menu_email')}</a></li>
                                    <li style={{display: 'inline'}}><a className="c-link" href="/faq"><i className="icon-bulb c-font-20" style={{ verticalAlign: -2}}></i>&nbsp;&nbsp; FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="c-layout-page">
                    {this.props.children}
                </div>

                <footer className="c-layout-footer c-layout-footer-6" style={{ backgroundImage: this.props.pageContainer.get('footer_background'), backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="c-prefooter" style={{ marginBottom: 0 }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div style={{textAlign: 'center', marginTop: 20}}>
                                        <img src={this.props.pageContainer.get('footer_logo')} width="120"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12" style={{ textAlign: 'center', marginTop: 50, marginBottom: 50 }}>
                                    <ul className="list-inline claya-footer">
                                        {
                                            this.props.pageContainer.get('footer_menu').map(function(menu, i) {
                                                return (<li style={{ marginLeft: 30, marginRight: 30 }}><a className="f-link" href={menu.link}>{ renderHTML(menu.title) }</a></li>)
                                            })
                                        }
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

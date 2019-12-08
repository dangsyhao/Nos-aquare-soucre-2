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
        return (
            <div>
                <header id="topnav" className="defaultscroll sticky nav-sticky">
                    <div className="container">
                        <div>
                            <a className="logo" href="/">
                                <img src="/public/static/logo.png" style={{ width: 170 }} />
                            </a>
                        </div>
                        <div id="navigation">
                            <ul className="navigation-menu">
                                <li><a href="/">Home</a></li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0)">Services</a><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="/services/business-process-optimization">Business Process Optimization</a></li>
                                        <li><a href="/services/web-application-development">Web Application Development</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0)">Technology</a><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="/technology/web-technologies">Web Technologies</a></li>
                                        <li><a href="/technology/cloud-platform">Cloud Platform</a></li>
                                        <li><a href="/technology/machine-learning">Machine Learning</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0)">Product</a><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="/product/quodbit-core">Quodbit Core</a></li>
                                        <li><a href="/product/quodbit-hiring">Quodbit Hiring</a></li>
                                        <li><a href="/product/quodbit-training">Quodbit Training</a></li>
                                        <li><a href="/product/quodbit-tagging">Quodbit Tagging</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0)">About Us</a><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="/about-us/portfolio">Portfolio</a></li>
                                        <li><a href="/about-us/the-team">The Team</a></li>
                                        <li><a href="/about-us/the-investor">The Investor</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="/blog">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

                { this.props.children }

                <footer className="footer footer-bar">
                    <div className="container text-center">
                        <div className="align-items-center row">
                            <div className="col-sm-6">
                                <div className="text-sm-left"><p className="mb-0">©2019 Not A Square Vietnam.</p></div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default View;

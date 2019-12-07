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
                                        <li><a href="index_saas.html">Business Process Optimization</a></li>
                                        <li><a href="index_saas.html">Web Application Development</a></li>
                                        <li><a href="index_saas.html">Product Development</a></li>
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
                                        <li><a href="index_saas.html">Not A Process</a></li>
                                        <li><a href="index_saas.html">Quodbit</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0)">About Us</a><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="/about-us/portfolio">Portfolio</a></li>
                                        <li><a href="index_saas.html">The Team</a></li>
                                        <li><a href="index_saas.html">The Investor</a></li>
                                        <li><a href="index_saas.html">The Blue Print</a></li>
                                        <li><a href="index_saas.html">The Process</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0)">Blog</a>
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

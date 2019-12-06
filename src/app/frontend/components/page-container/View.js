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
                                <li><a href="index.html">Home</a></li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0)">Services</a><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="index_saas.html">Business Process Optimization</a></li>
                                        <li><a href="index_saas.html">Web Application Development</a></li>
                                        <li><a href="index_saas.html">Mobile Application Development</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0)">Technology</a><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="index_saas.html">Web Technologies</a></li>
                                        <li><a href="index_saas.html">Mobile Technologies</a></li>
                                        <li><a href="index_saas.html">Cloud Platform</a></li>
                                        <li><a href="index_saas.html">Machine Learning</a></li>
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
                                    <a href="javascript:void(0)">Portfolio</a><span className="menu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="index_saas.html">Business Application</a></li>
                                        <li><a href="index_saas.html">Web Application</a></li>
                                        <li><a href="index_saas.html">Mobile App</a></li>
                                        <li><a href="index_saas.html">Web Design</a></li>
                                        <li><a href="index_saas.html">Machine Learning</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0)">About us</a>
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

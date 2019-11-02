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
            <div className="body_wrapper">
                <header className="header_area navbar_fixed">
                    <nav className="navbar navbar-expand-lg menu_one menu_four">
                        <div className="container custom_container p0">
                            <a className="navbar-brand" href="/"><img src="/public/static/logo.png" style={{ width: 200 }} /></a>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
                                    <li className="nav-item dropdown submenu mega_menu mega_menu_two active">
                                        <a className="nav-link dropdown-toggle" href="/">Home</a>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Services
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="blog-list.html" className="nav-link">Business Process Optimization</a></li>
                                            <li className="nav-item"><a href="blog-grid.html" className="nav-link">Web Application Development</a></li>
                                            <li className="nav-item"><a href="blog-grid-two.html" className="nav-link">Mobile Application Development</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Technology
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="/technology/web-technologies" className="nav-link">Web Technologies</a></li>
                                            <li className="nav-item"><a href="blog-grid-two.html" className="nav-link">Mobile Technologies</a></li>
                                            <li className="nav-item"><a href="blog-list.html" className="nav-link">Cloud Platform</a></li>
                                            <li className="nav-item"><a href="blog-list.html" className="nav-link">Machine Learning</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Portfolio
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="blog-grid.html" className="nav-link">Business Application</a></li>
                                            <li className="nav-item"><a href="blog-grid-two.html" className="nav-link">Web Application</a></li>
                                            <li className="nav-item"><a href="blog-list.html" className="nav-link">Mobile App</a></li>
                                            <li className="nav-item"><a href="blog-list.html" className="nav-link">Web Design</a></li>
                                            <li className="nav-item"><a href="blog-list.html" className="nav-link">Machine Learning</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                                        <a className="nav-link dropdown-toggle" href="/">About us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                { this.props.children }

                <footer className="footer_area footer_area_four f_bg" style={{ marginTop: 100 }}>
                    <div className="footer_bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-5 col-sm-6">
                                    <p className="mb-0 f_400">Copyright © 2019 Not A Square Vietnam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default View;

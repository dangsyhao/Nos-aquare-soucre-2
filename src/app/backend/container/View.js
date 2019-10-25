import React, {Component} from 'react';
import UserService from 'backend-app-services/userServices'

class View extends Component {
    componentWillMount() {
        if (!UserService.isLoggedIn()) {
            window.location.href = "/backend/login"
        }
    }
    renderHeader() {
        var selectedMenuId = this.props.pageContainer.get('selectedMenuId')
        return (
            <header className="navbar navbar-header navbar-header-fixed" style={{ backgroundColor: '#0033cc'}}>
                <a href="/" id="mainMenuOpen" className="burger-menu"><i data-feather="menu"></i></a>
                <div className="navbar-brand" style={{ paddingLeft: 25, color: '#FFFFFF', fontWeight: 500 }}>
                    Not A Square CMS
                </div>
                <div id="navbarMenu" className="navbar-menu-wrapper">
                    <div className="navbar-right">
                        <div className="dropdown dropdown-profile">
                            <a href="/" className="dropdown-link" data-toggle="dropdown" data-display="static">
                                <div className="avatar avatar-sm"><img src="https://via.placeholder.com/500" className="rounded-circle" alt="" /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    renderFooter() {
        return (
            <footer className="footer">
                <div>
                    <span>© 2019 Not A Square Vietnam </span>
                </div>
                <div>
                    <nav className="nav">
                        <a href="http://www.notasquare.vn" className="nav-link">About Us</a>
                    </nav>
                </div>
            </footer>
        )
    }
    renderAsideMenu() {
        var selectedMenuId = this.props.pageContainer.get('selectedMenuId')
        return (
            <aside className="aside aside-fixed">
                <div className="aside-header">
                    <a href="#" className="aside-logo">Not A Square CMS</a>
                </div>
                <div className="aside-body ps">
                    <ul className="nav nav-aside">
                        <li className={"nav-item " + (selectedMenuId == 'dashboard' ? 'active' : '')}><a href="/backend" className="nav-link"><span>Dashboard</span></a></li>
                        <li className={"nav-item " + (selectedMenuId == 'page' ? 'active' : '')}><a href="/backend/page" className="nav-link"><span>Page</span></a></li>
                        <li className={"nav-item " + (selectedMenuId == 'text_block' ? 'active' : '')}><a href="/backend/text_block" className="nav-link"><span>Text Block</span></a></li>
                        <li className={"nav-item " + (selectedMenuId == 'user' ? 'active' : '')}><a href="/backend/user" className="nav-link"><span>User</span></a></li>
                        <li className={"nav-item " + (selectedMenuId == 'setting' ? 'active' : '')}><a href="/backend/setting" className="nav-link"><span>Setting</span></a></li>
                    </ul>
                </div>
            </aside>
        )
    }

    render() {
        var _this = this;
        var isShowUserProfile = this.props.pageContainer.get('isShowUserProfile');
        var sidebarMenuId = this.props.pageContainer.get('sidebarMenuId');
        var selectedMenuId = this.props.pageContainer.get('selectedMenuId')

        return (
            <div>
                { _this.renderAsideMenu() }
                <div className="content ht-100v pd-0">
                    { _this.renderHeader() }
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default View;

import React, {Component} from 'react';

class View extends Component {
    render() {
        var _this = this;
        return (
            <div className="page-wrapper">
                <div className="page-header navbar">
                    <div className="page-header-inner">
                        <div className="page-logo">
                            <h4 style={{ margin: '15px 5px 5px -5px', color: '#FFFFFF', width: 500}}>{ this.props.pageContainer.get('applicationTitle') }</h4>
                        </div>

                        <div className="top-menu">
                            <ul className="nav navbar-nav pull-right">
                                <li className="dropdown dropdown-user">
                                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <span className="username username-hide-on-mobile">{  this.props.pageContainer.get('userName') }</span>
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-default">
                                        <li>
                                            <a href="/">
                                                <i className="icon-key"></i> Log Out
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="clearfix"> </div>

                <div className="page-container">
                    <div className="page-sidebar-wrapper">
                        <div className="page-sidebar navbar-collapse collapse">
                            {
                                Object.keys(_this.props.pageContainer.get('menu').toJS()).map(function(index) {
                                    var menuGroup = _this.props.pageContainer.get('menu').toJS()[index]
                                    return (
                                        <ul className="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                                            <li className="heading" style={{ paddingTop: '15px', paddingBottom: '5px'}}>
                                                <h3 className="uppercase">{ menuGroup.name }</h3>
                                            </li>
                                            {
                                                menuGroup.entries.map(function(menu, i) {
                                                    return <li className="nav-item">
                                                        <a href={ menu.url } className="nav-link" style={{ padding: '5px 15px'}}>
                                                            <span className="title" style={{paddingLeft: 10}}>{ menu.name }</span>
                                                        </a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="page-content-wrapper">
                        <div className="page-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default View;

import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';


class View extends Component {
    render() {
        return (
            <ul className="nav navbar-nav pull-right">
                <li className="dropdown dropdown-user">
                    <a href="javascript:;" onClick={e => this.props.action.is_show()} className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <span className="username username-hide-on-mobile">{  this.props.userdata.get('fullname') }</span>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className={(this.props.userdata.get('is_show')) ? "dropdown-menu dropdown-menu-default show" : "dropdown-menu dropdown-menu-default"}>
                        <li>
                            <a href="javascript:;"  onClick={e=> this.props.action.logout()}>
                                <i className="icon-key"></i> Log Out
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
    componentWillMount() {
        this.props.action.load()
    }
}

export default View;

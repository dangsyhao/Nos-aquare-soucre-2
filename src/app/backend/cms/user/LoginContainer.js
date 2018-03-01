import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import FormView from './form-login/View';
import FormStore from './form-login/Store';
import FormAction from './form-login/Action';
import UserView from 'backend-page-container/user-service/View';
import UserStore from 'backend-page-container/user-service/Store';
import UserAction from 'backend-page-container/user-service/Action';

const _dispatcher = new Dispatcher();
const _formStore = new FormStore(_dispatcher, 'form')
const _formAction = new FormAction(_dispatcher, 'form')


const _userStore = new UserStore(_dispatcher, 'user-service-backend')
const _userAction = new UserAction(_dispatcher, 'user-service-backend')

class LoginContainer extends Component {
    static getStores() {
        return [
            _formStore,
            _userStore
        ];
    }

    static calculateState(prevState) {
        return {
            form:             _formStore.getState(),
            userState:        _userStore.getState()
        }
    }

    render() {
        return (
            <div className="page-wrapper" style={{minHeight: '960px', backgroundColor: '#efefef'}}>
                <div className="page-header navbar">
                    <div className="page-header-inner">
                        <div className="page-logo">
                            <h4 style={{ margin: '15px 5px 5px -5px', color: '#FFFFFF'}}>{__params.config.appTitle}</h4>
                        </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
                <div className="page-content-wrapper">
                    <div className="portlet">
                        <div className="portlet-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 col-md-offset-4" style={{marginTop: '150px'}}>
                                        <FormView
                                            form={this.state.form}
                                            action={_formAction}
                                            userAction={_userAction}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container.create(LoginContainer);

import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import FormLoginView from './form-login/View';
import FormLoginStore from './form-login/Store';
import FormLoginAction from './form-login/Action';


const _dispatcher = new Dispatcher();
const _formLoginStore = new FormLoginStore(_dispatcher, 'form-login')
const _formLoginAction = new FormLoginAction(_dispatcher, 'form-login')


class LoginContainer extends Component {
    static getStores() {
        return [
            _formLoginStore,
        ];
    }

    static calculateState(prevState) {
        return {
            formLogin:          _formLoginStore.getState(),
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className=" row" style={{ marginTop: 250 }}>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header"><h6>Login</h6></div>
                            <div className="card-body">
                                <FormLoginView
                                    form={this.state.formLogin}
                                    action={_formLoginAction}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}

export default Container.create(LoginContainer);

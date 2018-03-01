import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/page-container/View';
import PageContainerAction from 'backend-page-container/page-container/Action';
import PageContainerStore from 'backend-page-container/page-container/Store';
import FormView from './form-update/View';
import FormStore from './form-update/Store';
import FormAction from './form-update/Action';

import UserView from 'backend-page-container/user-service/View';
import UserStore from 'backend-page-container/user-service/Store';
import UserAction from 'backend-page-container/user-service/Action';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _formStore = new FormStore(_dispatcher, 'form')
const _formAction = new FormAction(_dispatcher, 'form')

const _userStore = new UserStore(_dispatcher, 'user-service-backend')
const _userAction = new UserAction(_dispatcher, 'user-service-backend')
class UpdateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _formStore,
            _userStore
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
            form:             _formStore.getState(),
            userState:        _userStore.getState()
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer}
                userAction={_userAction}
                userComponent={<UserView userdata={this.state.userState} action={_userAction}/>}>
                <div className="portlet">
                    <div className="portlet-title">
                        <div className="caption">
                            <span className="caption-subject">Update user</span>
                        </div>
                        <div className="actions">
                        </div>
                    </div>
                    <div className="portlet-body">
                        <FormView
                            form={this.state.form}
                            action={_formAction}
                        />
                    </div>
                </div>
            </PageContainerView>
        )
    }
}

export default Container.create(UpdateContainer);

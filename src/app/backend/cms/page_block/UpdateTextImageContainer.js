import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import FormView from './form-update-text-image/View';
import FormStore from './form-update-text-image/Store';
import FormAction from './form-update-text-image/Action';
import PageDetailView from './components/page-detail/View';
import PageDetailAction from './components/page-detail/Action';
import PageDetailStore from './components/page-detail/Store';

import UserView from 'backend-page-container/user-service/View';
import UserStore from 'backend-page-container/user-service/Store';
import UserAction from 'backend-page-container/user-service/Action';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _formStore = new FormStore(_dispatcher, 'form')
const _formAction = new FormAction(_dispatcher, 'form')
const _pageDetailStore = new PageDetailStore(_dispatcher, 'page-detail')
const _pageDetailAction = new PageDetailAction(_dispatcher, 'page-detail')

const _userStore = new UserStore(_dispatcher, 'user-service-backend')
const _userAction = new UserAction(_dispatcher, 'user-service-backend')
class CreateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _formStore,
            _pageDetailStore,
            _userStore
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
            form:             _formStore.getState(),
            pageDetail:       _pageDetailStore.getState(),
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
                            <span className="caption-subject">Update block</span>
                        </div>
                        <div className="actions">
                        </div>
                    </div>
                    <div className="portlet-body">
                        <h5>PAGE</h5>
                        <PageDetailView
                            pageDetail={this.state.pageDetail}
                            action={_pageDetailAction}
                        />
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

export default Container.create(CreateContainer);

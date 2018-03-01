import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';

import UserView from 'backend-page-container/user-service/View';
import UserStore from 'backend-page-container/user-service/Store';
import UserAction from 'backend-page-container/user-service/Action';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')

const _userStore = new UserStore(_dispatcher, 'user-service-backend')
const _userAction = new UserAction(_dispatcher, 'user-service-backend')
class HomeContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _userStore
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
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
                            <span className="caption-subject">Dashboard</span>
                        </div>
                        <div className="actions">
                        </div>
                    </div>
                    <div className="portlet-body form">
                        <div className="well">
                            <h4>Welcome to Not A Square!</h4>
                        </div>
                    </div>
                </div>
            </PageContainerView>
        )
    }
}

export default Container.create(HomeContainer);

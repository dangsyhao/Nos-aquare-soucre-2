import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')

class HomeContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer}>
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
                            <h4>Welcome to Claya!</h4>
                        </div>
                    </div>
                </div>
            </PageContainerView>
        )
    }
}

export default Container.create(HomeContainer);

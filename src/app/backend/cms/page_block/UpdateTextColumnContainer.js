import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import FormView from './form-update-text-column/View';
import FormStore from './form-update-text-column/Store';
import FormAction from './form-update-text-column/Action';
import PageDetailView from './components/page-detail/View';
import PageDetailAction from './components/page-detail/Action';
import PageDetailStore from './components/page-detail/Store';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _formStore = new FormStore(_dispatcher, 'form')
const _formAction = new FormAction(_dispatcher, 'form')
const _pageDetailStore = new PageDetailStore(_dispatcher, 'page-detail')
const _pageDetailAction = new PageDetailAction(_dispatcher, 'page-detail')

class CreateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _formStore,
            _pageDetailStore
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
            form:             _formStore.getState(),
            pageDetail:       _pageDetailStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer}>
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

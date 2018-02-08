import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import FormView from './form-create/View';
import FormStore from './form-create/Store';
import FormAction from './form-create/Action';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _formStore = new FormStore(_dispatcher, 'form')
const _formAction = new FormAction(_dispatcher, 'form')

class CreateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _formStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
            form:             _formStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer}>
                <div className="portlet">
                    <div className="portlet-title">
                        <div className="caption">
                            <span className="caption-subject">Create new page</span>
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

export default Container.create(CreateContainer);

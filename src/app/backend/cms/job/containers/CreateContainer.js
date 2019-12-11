import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import FormView from './../components/form-create/View';
import FormStore from './../components/form-create/Store';
import FormAction from './../components/form-create/Action';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _formStore = new FormStore(_dispatcher, 'form')
const _formAction = new FormAction(_dispatcher, 'form')


_pageContainerAction.setSelectedMenu('job')
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
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <div className="content bd-b" style={{ marginTop: 50, paddingBottom: 10, paddingLeft: 25, backgroundColor: '#FFFFFF' }}>
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-5">
                        <h5 className="mg-b-0 tx-spacing--1">Add new Job</h5>
                    </div>
                </div>
                <div className="content" style={{ paddingLeft: 10 }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <FormView
                                    form={this.state.form}
                                    action={_formAction}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainerView>
        )
    }
}

export default Container.create(CreateContainer);

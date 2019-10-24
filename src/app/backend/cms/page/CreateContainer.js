import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import FormCreateView from './form-create/View';
import FormCreateStore from './form-create/Store';
import FormCreateAction from './form-create/Action';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _formCreateStore = new FormCreateStore(_dispatcher, 'form')
const _formCreateAction = new FormCreateAction(_dispatcher, 'form')

_pageContainerAction.setSelectedMenu('page')
class CreateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _formCreateStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
            form:             _formCreateStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <div className="content bd-b" style={{ marginTop: 50, paddingBottom: 10, paddingLeft: 25, backgroundColor: '#FFFFFF' }}>
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-5">
                        <h5 className="mg-b-0 tx-spacing--1">Page</h5>
                        <div className="d-none d-md-block pull-right">
                            <a className="btn btn-sm pd-x-15 btn-white btn-uppercase" href="/backend/page">Back</a>
                        </div>
                    </div>
                </div>
                <div className="content" style={{ paddingLeft: 10 }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <FormCreateView
                                    form={this.state.form}
                                    action={_formCreateAction}
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

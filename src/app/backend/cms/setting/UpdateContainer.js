import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import FormUpdateView from './components/form-update/View';
import FormUpdateStore from './components/form-update/Store';
import FormUpdateAction from './components/form-update/Action';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _formUpdateStore = new FormUpdateStore(_dispatcher, 'form-update')
const _formUpdateAction = new FormUpdateAction(_dispatcher, 'form-update')


_pageContainerAction.setSelectedMenu('setting')
class UpdateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _formUpdateStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:         _pageContainerStore.getState(),
            formUpdate:            _formUpdateStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <div className="content bd-b" style={{ marginTop: 50, paddingBottom: 10, paddingLeft: 25, backgroundColor: '#FFFFFF' }}>
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-5">
                        <h5 className="mg-b-0 tx-spacing--1">Update Setting</h5>
                    </div>
                </div>
                <div className="content" style={{ paddingLeft: 10 }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <FormUpdateView
                                    form={this.state.formUpdate}
                                    action={_formUpdateAction}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainerView>
        )
    }
}

export default Container.create(UpdateContainer);

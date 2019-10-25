import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';


import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import FormUpdateView from './components/form-update-text/View';
import FormUpdateStore from './components/form-update-text/Store';
import FormUpdateAction from './components/form-update-text/Action';
import PageDetailView from './components/page-detail/View';
import PageDetailAction from './components/page-detail/Action';
import PageDetailStore from './components/page-detail/Store';



const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _formUpdateStore = new FormUpdateStore(_dispatcher, 'form-update')
const _formUpdateAction = new FormUpdateAction(_dispatcher, 'form-update')
const _pageDetailStore = new PageDetailStore(_dispatcher, 'page-detail')
const _pageDetailAction = new PageDetailAction(_dispatcher, 'page-detail')


_pageContainerAction.setSelectedMenu('page')
class CreateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _formUpdateStore,
            _pageDetailStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:          _pageContainerStore.getState(),
            formUpdate:             _formUpdateStore.getState(),
            pageDetail:             _pageDetailStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <div className="content bd-b" style={{ marginTop: 50, paddingBottom: 10, paddingLeft: 25, backgroundColor: '#FFFFFF' }}>
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-5">
                        <h5 className="mg-b-0 tx-spacing--1">Update Block: General - Text</h5>
                        <div className="d-none d-md-block pull-right">
                            <a className="btn btn-sm pd-x-15 btn-white btn-uppercase" href={"/backend/page/view?id=" + __params.query.page_id}>Back</a>
                        </div>
                    </div>
                </div>
                <div className="content" style={{ paddingLeft: 10 }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <PageDetailView
                                    pageDetail={this.state.pageDetail}
                                    action={_pageDetailAction}
                                />
                                <br/>
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

export default Container.create(CreateContainer);

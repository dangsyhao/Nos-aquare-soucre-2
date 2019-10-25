import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';


import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import PageDetailView from './components/page-detail/View';
import PageDetailAction from './components/page-detail/Action';
import PageDetailStore from './components/page-detail/Store';
import FormCreateView from './components/form-create/View';
import FormCreateStore from './components/form-create/Store';
import FormCreateAction from './components/form-create/Action';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _pageDetailStore = new PageDetailStore(_dispatcher, 'page-detail')
const _pageDetailAction = new PageDetailAction(_dispatcher, 'page-detail')
const _formCreateStore = new FormCreateStore(_dispatcher, 'form-create')
const _formCreateAction = new FormCreateAction(_dispatcher, 'form-create')


_pageContainerAction.setSelectedMenu('page')
class CreateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _formCreateStore,
            _pageDetailStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:        _pageContainerStore.getState(),
            pageDetail:           _pageDetailStore.getState(),
            formCreate:           _formCreateStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <div className="content bd-b" style={{ marginTop: 50, paddingBottom: 10, paddingLeft: 25, backgroundColor: '#FFFFFF' }}>
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-5">
                        <h5 className="mg-b-0 tx-spacing--1">Add new Block</h5>
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
                                <FormCreateView
                                    form={this.state.formCreate}
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

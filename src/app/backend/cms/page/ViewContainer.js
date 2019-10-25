import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';


import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import DataTableView from './components/page-block/data-table/View';
import DataTableAction from './components/page-block/data-table/Action';
import DataTableStore from './components/page-block/data-table/Store';
import PageDetailView from './components/page-block/page-detail/View';
import PageDetailAction from './components/page-block/page-detail/Action';
import PageDetailStore from './components/page-block/page-detail/Store';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _dataTableStore = new DataTableStore(_dispatcher, 'data-table')
const _dataTableAction = new DataTableAction(_dispatcher, 'data-table')
const _pageDetailStore = new PageDetailStore(_dispatcher, 'page-detail')
const _pageDetailAction = new PageDetailAction(_dispatcher, 'page-detail')


_pageContainerAction.setSelectedMenu('page')
class ViewContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _dataTableStore,
            _pageDetailStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
            dataTable:        _dataTableStore.getState(),
            pageDetail:       _pageDetailStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <div className="content bd-b" style={{ marginTop: 50, paddingBottom: 10, paddingLeft: 25, backgroundColor: '#FFFFFF' }}>
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-5">
                        <h5 className="mg-b-0 tx-spacing--1">Update Page</h5>
                        <div className="d-none d-md-block pull-right">
                            <a className="btn btn-sm btn-primary btn-uppercase" href={"/backend/page_block/create?page_id=" + __params.query.id }>Add new page block</a>
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
                                <DataTableView
                                    dataTable={this.state.dataTable}
                                    action={_dataTableAction}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainerView>
        )
    }
}

export default Container.create(ViewContainer);

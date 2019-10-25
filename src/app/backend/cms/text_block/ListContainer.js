import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import DataTableView from './components/data-table/View';
import DataTableStore from './components/data-table/Store';
import DataTableAction from './components/data-table/Action';
import FormSearchView from './components/form-search/View';
import FormSearchStore from './components/form-search/Store';
import FormSearchAction from './components/form-search/Action';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _dataTableStore = new DataTableStore(_dispatcher, 'data-table')
const _dataTableAction = new DataTableAction(_dispatcher, 'data-table')
const _formSearchStore = new FormSearchStore(_dispatcher, 'form-search')
const _formSearchAction = new FormSearchAction(_dispatcher, 'form-search')


_pageContainerAction.setSelectedMenu('text_block')
class ListContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _dataTableStore,
            _formSearchStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
            dataTable:        _dataTableStore.getState(),
            formSearch:       _formSearchStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <div className="content bd-b" style={{ marginTop: 50, paddingBottom: 10, paddingLeft: 25, backgroundColor: '#FFFFFF' }}>
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-5">
                        <h5 className="mg-b-0 tx-spacing--1">Text Block</h5>
                        <div className="d-none d-md-block pull-right">
                            <a className="btn btn-sm btn-primary btn-uppercase" href="/backend/text_block/create">Add new Text Block</a>
                        </div>
                    </div>
                </div>
                <div className="content" style={{ paddingLeft: 10 }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <FormSearchView
                                    data={this.state.formSearch}
                                    action={_formSearchAction}
                                    dataTableAction={_dataTableAction}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
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

export default Container.create(ListContainer);

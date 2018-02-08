import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import DataTableView from './data-table/View';
import DataTableStore from './data-table/Store';
import DataTableAction from './data-table/Action';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _dataTableStore = new DataTableStore(_dispatcher, 'data-table')
const _dataTableAction = new DataTableAction(_dispatcher, 'data-table')

class ListContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _dataTableStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
            dataTable:        _dataTableStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer}>
                <div className="portlet">
                    <div className="portlet-title">
                        <div className="caption">
                            <span className="caption-subject">Page</span>
                        </div>
                        <div className="actions">
                            <a className="btn btn-sm btn-primary" href="/backend/page/create">Add new page</a>
                        </div>
                    </div>
                    <div className="portlet-body form">
                        <DataTableView
                            dataTable={this.state.dataTable}
                            action={_dataTableAction}
                        />
                    </div>
                </div>
            </PageContainerView>
        )
    }
}

export default Container.create(ListContainer);

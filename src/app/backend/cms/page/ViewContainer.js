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

class CreateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _dataTableStore,
            _pageDetailStore
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
            <PageContainerView pageContainer={this.state.pageContainer}>
                <div className="portlet">
                    <div className="portlet-title">
                        <div className="caption">
                            <span className="caption-subject">Page</span>
                        </div>
                        <div className="actions">
                        <a className="btn btn-xs btn-primary" href={"/backend/page_block/create?page_id=" + __params.query.id }>Add new page block</a>
                        </div>
                    </div>
                </div>
                <div className="portlet-body form">
                    <PageDetailView
                        pageDetail={this.state.pageDetail}
                        action={_pageDetailAction}
                    />
                    <DataTableView
                        dataTable={this.state.dataTable}
                        action={_dataTableAction}
                    />
                </div>
            </PageContainerView>
        )
    }
}

export default Container.create(CreateContainer);

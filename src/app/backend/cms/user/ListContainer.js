import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerStore from 'backend-page-container/Store';
import PageContainerAction from 'backend-page-container/Action';
import DataTableView from './data-table/View';
import DataTableStore from './data-table/Store';
import DataTableAction from './data-table/Action';
import FormSearchView from './form-search/View';
import FormSearchStore from './form-search/Store';
import FormSearchAction from './form-search/Action';


import UserView from 'backend-page-container/user-service/View';
import UserStore from 'backend-page-container/user-service/Store';
import UserAction from 'backend-page-container/user-service/Action';
const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _dataTableStore = new DataTableStore(_dispatcher, 'data-table')
const _dataTableAction = new DataTableAction(_dispatcher, 'data-table')
const _formSearchStore = new FormSearchStore(_dispatcher, 'form-search')
const _formSearchAction = new FormSearchAction(_dispatcher, 'form-search')

const _userStore = new UserStore(_dispatcher, 'user-service-backend')
const _userAction = new UserAction(_dispatcher, 'user-service-backend')
class ListContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _dataTableStore,
            _formSearchStore,
            _userStore
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:    _pageContainerStore.getState(),
            dataTable:        _dataTableStore.getState(),
            formSearch:       _formSearchStore.getState(),
            userState:        _userStore.getState()
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}
                userAction={_userAction}
                userComponent={<UserView userdata={this.state.userState} action={_userAction}/>}>
                <div className="portlet">
                    <div className="portlet-title">
                        <div className="caption">
                            <span className="caption-subject">User List</span>
                        </div>
                        <div className="actions" style={{ paddingRight: 15 }}>
                            <a href="/backend/user/create" className="btn btn-primary">Add new User</a>
                        </div>
                    </div>
                    <div className="portlet-body form">
                        <FormSearchView
                            data={this.state.formSearch}
                            action={_formSearchAction}
                            dataTableAction={_dataTableAction}
                        />
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

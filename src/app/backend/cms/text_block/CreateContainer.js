import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import PageContainerView from 'backend-page-container/View';
import PageContainerAction from 'backend-page-container/Action';
import PageContainerStore from 'backend-page-container/Store';
import FormCreateView from './components/form-create/View';
import FormCreateStore from './components/form-create/Store';
import FormCreateAction from './components/form-create/Action';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _formCreateStore = new FormCreateStore(_dispatcher, 'form-create')
const _formCreateAction = new FormCreateAction(_dispatcher, 'form-create')


_pageContainerAction.setSelectedMenu('text_block')
class CreateContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _formCreateStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:       _pageContainerStore.getState(),
            formCreate:          _formCreateStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <div className="content bd-b" style={{ marginTop: 50, paddingBottom: 10, paddingLeft: 25, backgroundColor: '#FFFFFF' }}>
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-5">
                        <h5 className="mg-b-0 tx-spacing--1">Create new Text Block</h5>
                    </div>
                </div>
                <div className="content" style={{ paddingLeft: 10 }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
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

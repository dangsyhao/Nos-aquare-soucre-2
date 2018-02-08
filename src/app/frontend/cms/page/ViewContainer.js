import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';

import ViewFactory from './ViewFactory';
import PageContainerView from 'frontend-components/container/View';
import PageContainerAction from 'frontend-components/container/Action';
import PageContainerStore from 'frontend-components/container/Store';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'container')

function createGetStores(viewFactory) {
    return function getStores() {
        var stores = [ _pageContainerStore];
        stores = viewFactory.buildStores(stores)
        return stores
    }
}

function createCalculateState(viewFactory) {
    return function calculateState(prevState) {
        var state = { pageContainer:    _pageContainerStore.getState() }
        state = viewFactory.calculateState(state)
        return state
    }
}

function createView(viewFactory) {
    return function View(props) {
        var _this = this;
        return (
            <PageContainerView pageContainer={props.pageContainer} action={_pageContainerAction}>
                { viewFactory.renderBlocks(props) }
            </PageContainerView>
        )
    }
}

export default function(blocks) {
    var viewFactory = new ViewFactory(_dispatcher);
    viewFactory.createBlocks(blocks)

    return Container.createFunctional(
        createView(viewFactory),
        createGetStores(viewFactory),
        createCalculateState(viewFactory)
    )
}

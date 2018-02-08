import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/container/View';
import PageContainerAction from 'frontend-components/container/Action';
import PageContainerStore from 'frontend-components/container/Store';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')

class Page404Container extends Component {
    static getStores() {
        return [
            _pageContainerStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:        _pageContainerStore.getState(),
        }
    }

    render() {
        var style = {}
        style.background = '#FCFCFC'
        style.width = "100%"
        style.paddingTop = 200
        style.paddingBottom = 100
        var mclass = "col-md-offset-2 col-md-8"
        var t = this.props.t

        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <div style={style}>
                    <div className="container-fluid claya-banner">
                        <div className="row">
                            <div className={mclass}>
                                <h3 className="c-main-title c-font-45 c-font-bold" style={{marginBottom: 30}}>{t('page_404_text')}</h3>
                                <p className="c-font-20 c-line-height-28 c-sub-title" style={{color: '#484848', marginBottom: 30}}>{t('page_404_subtext')}</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainerView>
        )
    }
}

export default translate()(Container.create(Page404Container));

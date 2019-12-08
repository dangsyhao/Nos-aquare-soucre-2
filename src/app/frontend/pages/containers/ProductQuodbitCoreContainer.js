import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/page-container/View';
import PageContainerAction from 'frontend-components/page-container/Action';
import PageContainerStore from 'frontend-components/page-container/Store';
import WhatIsQuodbitCoreView from '../components/what-is-quodbit-core/View';
import WhatIsQuodbitCoreAction from '../components/what-is-quodbit-core/Action';
import WhatIsQuodbitCoreStore from '../components/what-is-quodbit-core/Store';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _whatIsQuodbitCoreStore = new WhatIsQuodbitCoreStore(_dispatcher, 'what-is-quodbit-core')
const _whatIsQuodbitCoreAction = new WhatIsQuodbitCoreAction(_dispatcher, 'what-is-quodbit-core')


_pageContainerAction.setSelectedMenu('product')
class ProductQuodbitCoreContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _whatIsQuodbitCoreStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:                _pageContainerStore.getState(),
            whatIsQuodbitCore:            _whatIsQuodbitCoreStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <section className="bg-marketing border-bottom" id="home" style={{ background: 'url("http://landrick.react.themesbrand.com/static/media/marketing-shape.2efcbf45.png")'}}>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="justify-content-center mt-5 row">
                                    <div className="text-center col-md-7 col-lg-7" style={{ paddingTop: 100 }}>
                                        <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h2 className="heading mb-3" style={{ fontSize: 40 }}>Quodbit Core</h2>
                                            <p className="para-desc text-muted">Machine Learning on Code, the Code Analysis Engine that solve Software Industry Problem</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section border-bottom">
                    <WhatIsQuodbitCoreView
                        data={this.state.whatIsQuodbitCore}
                        action={_whatIsQuodbitCoreAction}
                    />
                </section>


            </PageContainerView>
        )
    }
}
export default Container.create(ProductQuodbitCoreContainer);

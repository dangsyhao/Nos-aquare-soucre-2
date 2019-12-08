import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/page-container/View';
import PageContainerAction from 'frontend-components/page-container/Action';
import PageContainerStore from 'frontend-components/page-container/Store';
import WhatIsWebApplicationView from '../components/what-is-web-application/View';
import WhatIsWebApplicationAction from '../components/what-is-web-application/Action';
import WhatIsWebApplicationStore from '../components/what-is-web-application/Store';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _whatIsWebApplicationStore = new WhatIsWebApplicationStore(_dispatcher, 'what-is-web-application')
const _whatIsWebApplicationAction = new WhatIsWebApplicationAction(_dispatcher, 'what-is-web-application')


_pageContainerAction.setSelectedMenu('services')
class ServicesWebApplicationDevelopmentContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _whatIsWebApplicationStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:                _pageContainerStore.getState(),
            whatIsWebApplication:         _whatIsWebApplicationStore.getState(),
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
                                            <h2 className="heading mb-3" style={{ fontSize: 40 }}>Web Application Development</h2>
                                            <p className="para-desc text-muted">Strengthen your Brand by providing your Services as a unique custom-built Web-based Application</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section border-bottom">
                    <WhatIsWebApplicationView
                        data={this.state.whatIsWebApplication}
                        action={_whatIsWebApplicationAction}
                    />
                </section>


            </PageContainerView>
        )
    }
}
export default Container.create(ServicesWebApplicationDevelopmentContainer);

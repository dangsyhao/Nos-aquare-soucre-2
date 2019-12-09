import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/page-container/View';
import PageContainerAction from 'frontend-components/page-container/Action';
import PageContainerStore from 'frontend-components/page-container/Store';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')



_pageContainerAction.setSelectedMenu('product')
class ProductQuodbitOnboardingContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:                _pageContainerStore.getState(),
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
                                            <span className="badge badge-outline-primary rounded" style={{ float: 'right', marginTop: -50 }}>Under development</span>
                                            <h2 className="heading mb-3" style={{ fontSize: 40 }}>Quodbit Onboarding</h2>
                                            <p className="para-desc text-muted">Reduce the project onboarding time from 3-month to 2-weeks by curating the relevant materials based on Source Code</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="justify-content-center row">
                            <div className="text-center col">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Under development</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">{"This product is under development, let's subscribe to receive the notification when we launch"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="justify-content-center mt-4 pt-2 row">
                            <div className="col-md-10 col-lg-7">
                                <form>
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" aria-describedby="newssubscribebtn" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary submitBnt" type="button" id="newssubscribebtn">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


            </PageContainerView>
        )
    }
}
export default Container.create(ProductQuodbitOnboardingContainer);

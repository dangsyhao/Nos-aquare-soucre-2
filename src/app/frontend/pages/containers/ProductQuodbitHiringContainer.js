import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/page-container/View';
import PageContainerAction from 'frontend-components/page-container/Action';
import PageContainerStore from 'frontend-components/page-container/Store';
import WhatIsQuodbitHiringView from '../components/what-is-quodbit-hiring/View';
import WhatIsQuodbitHiringAction from '../components/what-is-quodbit-hiring/Action';
import WhatIsQuodbitHiringStore from '../components/what-is-quodbit-hiring/Store';


const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
const _whatIsQuodbitHiringStore = new WhatIsQuodbitHiringStore(_dispatcher, 'what-is-quodbit-hiring')
const _whatIsQuodbitHiringAction = new WhatIsQuodbitHiringAction(_dispatcher, 'what-is-quodbit-hiring')



_pageContainerAction.setSelectedMenu('product')
class ProductQuodbitHiringContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _whatIsQuodbitHiringStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:                 _pageContainerStore.getState(),
            whatIsQuodbitHiring:           _whatIsQuodbitHiringStore.getState(),
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
                                            <span className="badge badge-outline-primary rounded" style={{ float: 'right', marginTop: -50 }}>Private Beta</span>
                                            <h2 className="heading mb-3" style={{ fontSize: 40 }}>Quodbit Hiring</h2>
                                            <p className="para-desc text-muted">Simplify and optimize the hiring process efficiency by analysing the Source Code that candidates will be working on</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section border-bottom" style={{ paddingBottom: 150 }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: 40 }}>
                            <h2 className="title mb-4">The Pain Points</h2>
                            <p className="text-muted">Why hiring the right developers for the project so hard?</p>
                        </div>
                        <div className="row">
                            <div className="mt-6 col-md-6">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Inaccuracy Job Description</h4>
                                    <p className="text-muted para">By writting the incorrect Job Description for the project, HR Manager has failed the first step to attract the right candidates</p>
                                </div>
                            </div>
                            <div className="mt-6 col-md-6">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Ineffective CV to Projects Matching</h4>
                                    <p className="text-muted para">Due to cognito limitation, the process of manually reviewing 1000+ CV for 20+ different projects proving to error</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 20 }}>
                            <div className="mt-6 col-md-6">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Incomplete Candidates Profiles</h4>
                                    <p className="text-muted para">By analysing the candidates technical profile on deeper-level, candidates to projects matching accuracy will be improved</p>
                                </div>
                            </div>
                            <div className="mt-6 col-md-6">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Off-the-target Interview Test</h4>
                                    <p className="text-muted para">By asking wrong/irrelevant questions, HR Manager hired wrong guy for the project, which is very costly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-cta" style={{ background: 'url("http://landrick.react.themesbrand.com/static/media/bg03.4e5a286b.jpg") center center'}} id="cta">
                    <div className="bg-overlay bg-overlay-gradient"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title">
                                    <h4 className="main-title text-white mb-4">Lacking of key project data is the Root Cause</h4>
                                    <p className="text-light para-desc mx-auto">As HR Manager dont have (or cant) have key details of the real project he is hiring people for, so the mismatching is inevitable.. as he is writing the wrong job description, attracting wrong candidates, asking wrong technical questions then assign talents to wrong projects.. and that costs IT company a lots</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section border-bottom">
                    <WhatIsQuodbitHiringView
                        data={this.state.whatIsQuodbitHiring}
                        action={_whatIsQuodbitHiringAction}
                    />
                </section>

                <section className="section">
                    <div className="container">
                        <div className="justify-content-center row">
                            <div className="text-center col">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Currently in private beta</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">{"Please contact us and subscribe for private beta testers"}</p>
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
export default Container.create(ProductQuodbitHiringContainer);

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

                <section className="section border-bottom" style={{ paddingBottom: 150 }}>
                    <div className="container">
                        <div className="justify-content-center row">
                            <div className="text-center col">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Application</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">The Analysis Result will be the key piece of information to optimize a lots of process in Software Development Industry</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-5 pt-3 col-md-6 col-lg-4">
                                <div className="features">
                                    <div className="content mt-4">
                                        <h4 className="title-2">Hiring</h4>
                                        <p className="text-muted">Increase developer to job matching accuracy, by optimizing the hiring process efficiency via analysing the Source Code that candidates will be working on.</p>
                                        <a className="text-success" href="/product/quodbit-hiring">Read more <i className="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-5 pt-3 col-md-6 col-lg-4">
                                <div className="features">
                                    <div className="content mt-4">
                                        <h4 className="title-2">Onboarding</h4>
                                        <p className="text-muted">Solve high turnover rate human resources issue, by reducing the project onboarding time from 3-month to 2-weeks via curating the materials that actually be used in Source Code.</p>
                                        <a className="text-success" href="/product/quodbit-onboarding">Read more <i className="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-5 pt-3 col-md-6 col-lg-4">
                                <div className="features">
                                    <div className="content mt-4">
                                        <h4 className="title-2">Tagging</h4>
                                        <p className="text-muted">Make developers life simpler, by simplifying the software requirement via automatic tagging relevant modules and filtering relevant source code.</p>
                                        <a className="text-success" href="/product/quodbit-tagging">Read more <i className="mdi mdi-chevron-right"></i></a>
                                    </div>
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
                                    <h4 className="main-title text-white mb-4">Code Analysis is the key</h4>
                                    <p className="text-light para-desc mx-auto"> to optimize every Process in the Software Development Industry. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: 20 }}>
                            <span className="badge badge-outline-primary rounded" style={{ float: 'right', marginTop: -50 }}>quod2vec</span>
                            <h2 className="title mb-4">The Neuron Network</h2>
                            <p className="text-muted">How the mapping from Source Code into Vectors (i.e. distributed representation) learnt by the Network?</p>
                        </div>
                        <div className="row">
                            <div className="mt-4 pt-2 col-md-4">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Features Extraction</h4>
                                    <p className="text-muted para">The <span className="text-primary">1.000.000 line of code</span> from our <span className="text-primary">400 bitbucket repositories</span> will be parsed into UAST tree format, pre-process then feed directly into the Neuron Network as low-level features</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-4">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">2048-dimension vectorization</h4>
                                    <p className="text-muted para">Then on top of that, we build a <a href="https://arxiv.org/abs/1512.03385" target="_blank">ResNet50-like</a> Neuron network to learn higher-level representation in <a href="https://en.wikipedia.org/wiki/Manifold">manifold space</a>, ended into an 2048-dimension vector to extract the distributed representation of Code</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-4">
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Multi-Task Learning</h4>
                                    <p className="text-muted para">Then there 2 layers of fully-connected networks to train 50+ code classification problem (such as language detection, design pattern classification), at the same time on the same network</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PageContainerView>
        )
    }
}
export default Container.create(ProductQuodbitCoreContainer);

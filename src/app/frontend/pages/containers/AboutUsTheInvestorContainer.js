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


_pageContainerAction.setSelectedMenu('technology')
class AboutUsTheInvestorContainer extends Component {
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
                                            <h1 className="heading mb-3">The Investor</h1>
                                            <p className="para-desc text-muted">Founded in 2016, profitable and get first round of investment in 2017</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-4" style={{ marginBottom: 20 }}>
                                <span className="badge badge-outline-primary rounded" style={{ float: 'right', marginTop: 10, marginRight: 0 }}>Seed round</span>
                                <h2 className="title">Novogenia</h2>
                                <a href="https://novogenia.com/unternehmen/">www.novogenia.com</a>
                                <br/><br/>
                                <p className="text-muted" style={{ textAlign: 'justify' }}>Novogenia founded in 2009 by Dr. Daniel Wallerstorfer, now is the market leader in genetic-based fitness, healthcare and lifestyle solution in Europe.</p>

                                <p className="text-muted" style={{ textAlign: 'justify' }}>In 2017, Novogenia invested into Not A Square and became the biggest partner, entrusted our <span className="text-primary">full-stack engineers</span> at least 20+ key software projects, from CMS to ERP System, even the secret Deep Genome A.I. Research</p>
                            </div>
                            <div className="col-md-8 col-lg-8">
                                <img src="https://novogenia.com/wp-content/uploads/history1-1400x583.png" style={{ width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                </section>
            </PageContainerView>
        )
    }
}
export default Container.create(AboutUsTheInvestorContainer);

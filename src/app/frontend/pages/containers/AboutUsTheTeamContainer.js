import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Dispatcher} from 'flux';
import { translate } from 'react-i18next';


import PageContainerView from 'frontend-components/page-container/View';
import PageContainerAction from 'frontend-components/page-container/Action';
import PageContainerStore from 'frontend-components/page-container/Store';
//Job-component
import JobViewComponent from '../components/aboutUs-theTeam-Job/View';
import JobStoreComponent from '../components/aboutUs-theTeam-Job/Store';
import JobActionComponent from '../components/aboutUs-theTeam-Job/Action';

const _dispatcher = new Dispatcher();
const _pageContainerStore = new PageContainerStore(_dispatcher, 'page-container')
const _pageContainerAction = new PageContainerAction(_dispatcher, 'page-container')
//Job-component
const _jobComponentAction = new JobActionComponent(_dispatcher,'aboutUs-theTeam-job');
const _jobComponentStore = new JobStoreComponent(_dispatcher,'aboutUs-theTeam-job');

_pageContainerAction.setSelectedMenu('technology')
class AboutUsTheTeamContainer extends Component {
    static getStores() {
        return [
            _pageContainerStore,
            _jobComponentStore,
        ];
    }

    static calculateState(prevState) {
        return {
            pageContainer:                _pageContainerStore.getState(),
            _jobComponentStore:           _jobComponentStore.getState(),
        }
    }

    render() {
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <section className="bg-marketing" id="home" style={{ background: 'url("http://landrick.react.themesbrand.com/static/media/marketing-shape.2efcbf45.png")'}}>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="justify-content-center mt-5 row">
                                    <div className="text-center col-md-7 col-lg-7" style={{ paddingTop: 100 }}>
                                        <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h1 className="heading mb-3">The Team</h1>
                                            <p className="para-desc text-muted"><span className="text-primary">Small</span> and highly curated <span className="text-primary">elite</span> all-rounders, share the <span className="text-primary">full-stack</span> mindset</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-light" style={{ paddingBottom: 200 }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: 20 }}>
                            <h2 className="title mb-4">The Mindset</h2>
                            <p className="text-muted">We all believe that human loves working and learning new things, discover new ways of getting thing done</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Full-stack than specialized</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Solve real-world Problem</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Process-driven Automation</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Small team of Elites > Legions</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Automation > Human Labors</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Never stop creating</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" style={{ paddingBottom: 100 }}>
                    <div className="container">
                        <div className="justify-content-center row">
                            <div className="text-center mt-0 col-md-9">
                                <div className="title-heading" style={{ paddingBottom: 80 }}>
                                    <h2 className=" mb-3">Our Greatest Minds</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mt-4 pt-2 col-md-6 col-lg-3">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src="https://ca.slack-edge.com/T0JTL2M2N-U0JTL9L94-3dde3f2559ef-48" className="img-fluid d-block rounded-pill mx-auto" alt="" style={{ height: 200 }}/>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><a className="name text-dark" href="/page-aboutus">vaquan</a></h5>
                                        <small className="designation text-muted">Founder</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-3">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/1.4df4eade.jpg" className="img-fluid d-block rounded-pill mx-auto" alt="" style={{ height: 200 }}/>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><a className="name text-dark" href="/page-aboutus">dw</a></h5>
                                        <small className="designation text-muted">Business Development</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-3">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/1.4df4eade.jpg" className="img-fluid d-block rounded-pill mx-auto" alt="" style={{ height: 200 }}/>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><a className="name text-dark" href="/page-aboutus">nttuyet</a></h5>
                                        <small className="designation text-muted">Finance</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-3">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/1.4df4eade.jpg" className="img-fluid d-block rounded-pill mx-auto" alt="" style={{ height: 200 }}/>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><a className="name text-dark" href="/page-aboutus">dnhai</a></h5>
                                        <small className="designation text-muted">Full-stack Developer</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-3">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src="https://i.pinimg.com/originals/9c/b8/03/9cb803144a5ae4723a0df481c73dc6dd.png" className="img-fluid d-block rounded-pill mx-auto" alt="" style={{ height: 200, width: 200 }}/>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><a className="name text-dark" href="/page-aboutus">dnlinh</a></h5>
                                        <small className="designation text-muted">Full-stack Developer</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-3">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src="https://ca.slack-edge.com/T0JTL2M2N-UHB63EV42-f8b6e5617644-24" className="img-fluid d-block rounded-pill mx-auto" alt="" style={{ height: 200, width: 200 }}/>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><a className="name text-dark" href="/page-aboutus">hncanh</a></h5>
                                        <small className="designation text-muted">Full-stack Developer</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-3">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/1.4df4eade.jpg" className="img-fluid d-block rounded-pill mx-auto" alt="" style={{ height: 200 }}/>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><a className="name text-dark" href="/page-aboutus">btlinh</a></h5>
                                        <small className="designation text-muted">Administration</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-3">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/1.4df4eade.jpg" className="img-fluid d-block rounded-pill mx-auto" alt="" style={{ height: 200 }}/>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><a className="name text-dark" href="/page-aboutus">htthuong</a></h5>
                                        <small className="designation text-muted">Data Entry</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" style={{ paddingBottom: 200 }}>
                <JobViewComponent
                    data={this.state._jobComponentStore}
                    action={_jobComponentAction}
                />
                </section>
            </PageContainerView>
        )
    }
}
export default Container.create(AboutUsTheTeamContainer);

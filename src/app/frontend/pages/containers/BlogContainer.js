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


_pageContainerAction.setSelectedMenu('blog')
class BlogContainer extends Component {
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
                                <div className="justify-content-center  row">
                                    <div className="text-center col-md-7 col-lg-7" style={{ paddingTop: 50 }}>
                                        <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h1 className="heading mb-3">Blog</h1>
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
                            <div className="mt-4 pt-2 col-md-6 col-lg-4">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/1.10d49531.jpg" className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><a className="title text-dark" href="/index-personal">Full-Stack Developers are the future of Software Development</a></h4>
                                        <div className="post-meta mt-3">
                                            <a className="text-muted float-right readmore" href="/index-personal">Read More <i className="mdi mdi-chevron-right"></i></a>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><a className="text-muted like" href="/index-personal"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                <li className="list-inline-item"><a className="text-muted comments" href="/index-personal"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-4">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/01.716ab2cf.jpg" className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><a className="title text-dark" href="/index-personal">Why Product Teams need Full-Stack Software Agency ?</a></h4>
                                        <div className="post-meta mt-3">
                                            <a className="text-muted float-right readmore" href="/index-personal">Read More <i className="mdi mdi-chevron-right"></i></a>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><a className="text-muted like" href="/index-personal"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                <li className="list-inline-item"><a className="text-muted comments" href="/index-personal"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-4">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/02.f6ad9413.jpg" className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><a className="title text-dark" href="/index-personal">How Quodbit A.I. simplify Software Development</a></h4>
                                        <div className="post-meta mt-3">
                                            <a className="text-muted float-right readmore" href="/index-personal">Read More <i className="mdi mdi-chevron-right"></i></a>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><a className="text-muted like" href="/index-personal"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                <li className="list-inline-item"><a className="text-muted comments" href="/index-personal"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-4">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/1.10d49531.jpg" className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><a className="title text-dark" href="/index-personal">BRCNN to detect Fashion Landmarks</a></h4>
                                        <div className="post-meta mt-3">
                                            <a className="text-muted float-right readmore" href="/index-personal">Read More <i className="mdi mdi-chevron-right"></i></a>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><a className="text-muted like" href="/index-personal"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                <li className="list-inline-item"><a className="text-muted comments" href="/index-personal"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-4">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/01.716ab2cf.jpg" className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><a className="title text-dark" href="/index-personal">Multi-Task Learning for Fashion Tagging</a></h4>
                                        <div className="post-meta mt-3">
                                            <a className="text-muted float-right readmore" href="/index-personal">Read More <i className="mdi mdi-chevron-right"></i></a>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><a className="text-muted like" href="/index-personal"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                <li className="list-inline-item"><a className="text-muted comments" href="/index-personal"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 col-md-6 col-lg-4">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src="http://landrick.react.themesbrand.com/static/media/02.f6ad9413.jpg" className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><a className="title text-dark" href="/index-personal">Quodbit: ML for Code, to solve real-world problem</a></h4>
                                        <div className="post-meta mt-3">
                                            <a className="text-muted float-right readmore" href="/index-personal">Read More <i className="mdi mdi-chevron-right"></i></a>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><a className="text-muted like" href="/index-personal"><i className="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                <li className="list-inline-item"><a className="text-muted comments" href="/index-personal"><i className="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </PageContainerView>
        )
    }
}
export default Container.create(BlogContainer);

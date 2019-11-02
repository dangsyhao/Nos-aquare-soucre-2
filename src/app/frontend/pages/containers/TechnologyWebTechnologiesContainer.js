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

class TechnologyWebTechnologiesContainer extends Component {
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
        return (
            <PageContainerView pageContainer={this.state.pageContainer} action={_pageContainerAction}>
                <section className="agency_banner_area bg_color">
                    <img className="banner_shap" src="/public/static/banner_bg.png" alt="" />
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-5 d-flex align-items-center">
                                <div className="agency_content">
                                    <h2 className="f_700 t_color3 mb_40 wow fadeInLeft" data-wow-delay="0.3s">Full-Stack Custom Software Development</h2>
                                    <p className="f_400 l_height28 wow fadeInLeft" data-wow-delay="0.4s">We provide an all-in-one custom software development services for SME and start-ups, everything you need to launch and scale your business!</p>
                                    <div className="action_btn d-flex align-items-center mt_60">
                                        <a href="#" className="btn_hover agency_banner_btn wow fadeInLeft" data-wow-delay="0.5s">Let{"'"}s talk about your Business</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 text-right">
                                <img className="protype_img wow fadeInRight" data-wow-delay="0.3s" src="/public/static/banner_img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

            </PageContainerView>
        )
    }
}
export default Container.create(TechnologyWebTechnologiesContainer);

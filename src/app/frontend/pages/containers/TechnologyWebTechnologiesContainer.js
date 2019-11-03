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

_pageContainerAction.setSelectedMenu('technology')
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
                <section className="erp_banner_area_two">
                    <ul className="list-unstyled cloud_animation">
                        <li><img src={ __params.config['theme-static.url'] + "/img/erp-home/cloud_01.png" } alt="" /></li>
                        <li><img src={ __params.config['theme-static.url'] + "/img/erp-home/cloud_02.png" } alt="" /></li>
                        <li><img src={ __params.config['theme-static.url'] + "/img/erp-home/cloud_03.png" } alt="" /></li>
                        <li><img src={ __params.config['theme-static.url'] + "/img/erp-home/cloud_04.png" } alt="" /></li>
                        <li><img src={ __params.config['theme-static.url'] + "/img/erp-home/cloud_05.png" } alt="" /></li>
                        <li><img src={ __params.config['theme-static.url'] + "/img/erp-home/cloud_06.png" } alt="" /></li>
                    </ul>
                    <div className="erp_shap"></div>
                    <div className="erp_shap_two" style={{ background: "url(" + __params.config['theme-static.url'] + "/img/erp-home/banner_shap.png) no-repeat scroll top left;"}}></div>
                    <div className="section_intro">
                        <div className="section_container">
                            <div className="intro">
                                <div className=" intro_content">
                                    <h1>Web Technology</h1>
                                    <p>Increase the profitability, availability, and efficiency of your business via the relevant web development solutions with the scalable architecture using the latest technologies and trends</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="app_featured_area" style={{ padding: 0, marginTop: -200 }}>
                    <div className="container">
                        <div className="row flex-row-reverse app_feature_info">
                            <div className="col-lg-6">
                                <div className="app_fetured_item">
                                    <div className="app_item item_one">
                                        <i className="ti-face-smile f_size_40 w_color"></i>
                                        <h6 className="f_p f_400 f_size_16 w_color l_height45">Scalability</h6>
                                    </div>
                                    <div className="app_item item_two">
                                        <i className="ti-receipt f_size_40 w_color"></i>
                                        <h6 className="f_p f_400 f_size_16 w_color l_height45">Aesthetic Design</h6>
                                    </div>
                                    <div className="app_item item_three">
                                        <i className="ti-face-smile f_size_40 w_color"></i>
                                        <h6 className="f_p f_400 f_size_16 w_color l_height45">UI/UX</h6>
                                    </div>
                                    <div className="app_item item_four">
                                        <i className="ti-tablet f_size_40 w_color"></i>
                                        <h6 className="f_p f_400 f_size_16 w_color l_height45">Responsive</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="app_featured_content" style={{ paddingTop: 180 }}>
                                    <h2 className="f_p f_size_30 f_700 t_color3 l_height45  mb-30">The Modern Web Application</h2>
                                    <p className="f_400">
                                        Without limiting our client functional requirements, we continuously research and integrate cutting-edge and modern technologies to ensure best user experience in your final product
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PageContainerView>
        )
    }
}
export default Container.create(TechnologyWebTechnologiesContainer);

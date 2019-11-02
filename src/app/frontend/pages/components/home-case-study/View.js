import React, {Component} from 'react';

class View extends Component {
    componentWillMount() {
    }
    render() {
        var _this = this;

        return (
            <section className="portfolio_area sec_pad">
                <div className="container">
                    <div className="sec_title mb_70">
                        <h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">Take a look around<br />our Portfolio</h2>
                    </div>
                    <div id="portfolio_filter" className="portfolio_filter mb_50">
                        <div className="work_portfolio_item active">Random</div>
                        <div className="work_portfolio_item">Business Application</div>
                        <div className="work_portfolio_item">Web Application</div>
                        <div className="work_portfolio_item">Mobile App</div>
                        <div className="work_portfolio_item">Web Design</div>
                        <div className="work_portfolio_item">Machine Learning</div>
                    </div>
                    <div className="row portfolio_gallery mb_30" id="work-portfolio" >
                        <div className="col-lg-4 col-sm-6 portfolio_item br ux mb-30">
                            <div className="portfolio_img">
                                <img src={ __params.config['theme-static.url'] + "/img/portfolio/full-width/mas-3col-2.jpg" } alt="" />
                                <div className="hover_content h_content_two">
                                    <div className="portfolio-description leaf">
                                        <a href="work-default.html" className="portfolio-title">
                                            <h3 className="f_500 f_size_20 f_p">Apple Mobile Mockup</h3>
                                        </a>
                                        <div className="links"><a href="#">Branding,</a><a href="#">Fashion</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 portfolio_item fashion web mb-30">
                            <div className="portfolio_img">
                                <img src={ __params.config['theme-static.url'] + "/img/portfolio/full-width/mas-3col-2.jpg" } alt="" />
                                <div className="hover_content h_content_two">
                                    <div className="portfolio-description leaf">
                                        <a href="work-default.html" className="portfolio-title">
                                            <h3 className="f_500 f_size_20 f_p">Interior Design</h3>
                                        </a>
                                        <div className="links"><a href="#">Branding,</a><a href="#">Fashion</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 portfolio_item fashion web mb-30">
                            <div className="portfolio_img">
                                <img src={ __params.config['theme-static.url'] + "/img/portfolio/full-width/mas-3col-2.jpg" } alt="" />
                                <div className="hover_content h_content_two">
                                    <div className="portfolio-description leaf">
                                        <a href="work-default.html" className="portfolio-title">
                                            <h3 className="f_500 f_size_20 f_p">Interior Design</h3>
                                        </a>
                                        <div className="links"><a href="#">Branding,</a><a href="#">Fashion</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="price_btn">View all Work</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default View;

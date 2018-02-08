import React, {Component} from 'react';
import renderHTML from 'react-render-html';
import './style.css';

class View extends Component {
    componentDidMount() {
        this.props.action.load(this.props.parameters);
    }
    render() {
        var _this = this;
        var data = this.props.data
        var style = {}
        style.background = data.get('backround')
        style.width = "100%"
        style.height = data.get('height')
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = 50;
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')

        var pageGroups = []
        var N = _this.props.data.get('pages').size
        var L = 0
        for (var i = 0; i < N; i+= 3) {
            pageGroups.push(_this.props.data.get('pages').slice(i, i+3))
        }

        return (
            <div style={style}>
                <div className="container-fluid claya-page-listing">
                    <div className="row">
                        <div className={mclass}>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="c-center c-font-40">{renderHTML(data.get('title'))}</h2>
                                </div>
                            </div>
                            {
                                pageGroups.map(function(pageGroup, i) {
                                    return (
                                        <div className="row">
                                            {
                                                pageGroup.map(function(page, j) {
                                                    if (page.link != '') {
                                                        return (
                                                            <div className="col-md-4 page-listing-entry" onClick={e => _this.props.action.goto(page.link)}>
                                                                { _this.renderPageContent(page) }
                                                            </div>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <div className="col-md-4 page-listing-entry-no-link">
                                                                { _this.renderPageContent(page) }
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    renderPageContent(page) {
        return (
            <div className="c-content-events-1-item c-content-padding ">
                <div className="c-content-events-1-img-container">
                    <img className="c-content-events-1-img img-responsive" src={ page.image} />
                </div>
                <div className="c-content-events-1-content-container">
                    <h3 className="c-font-bold c-font-20" style={{ paddingTop: 15 }}>{ page.title }</h3>
                    <p style={{ paddingTop: 5 }}>{ page.description }</p>
                </div>
            </div>
        )
    }
}

export default View;

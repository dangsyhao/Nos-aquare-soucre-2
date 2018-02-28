import React, {Component} from 'react';
import renderHTML from 'react-render-html';

class View extends Component {
    render() {
        var _this = this;
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.paddingTop = data.get('paddingTop')
        style.paddingBottom = data.get('paddingBottom')
        return (
            <div style={style}>
                <div className="container">
                    <div className="row c-page-faq-2">
                        <div className="col-md-12">
                            <div className="">
                                {
                                    data.get('list').map(function(li, i) {
                                        return (
                                            <div className="" key={i} style={{padding: 15, border: '1px solid #EEE', marginTop: -1}}>
                                                <a href="javascript:;" onClick={()=>_this.props.action.scrollBox(i)}>
                                                    <div className="">
                                                        <h3 className={data.get('index') == i ? "c-font-20 c-font-bold": "c-font-20"} style={{float: 'left'}}>{li.title}</h3>
                                                    </div>
                                                </a>
                                                <div className="clear"></div>
                                                <div className="" style={{display: data.get('index') == i ? 'block': 'none'}}>
                                                    <p>{renderHTML(li.text)}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.action.load(this.props.parameters)
    }

}

export default View;

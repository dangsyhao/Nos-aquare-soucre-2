import React, {Component} from 'react';
import renderHTML from 'react-render-html';

class View extends Component {
    render() {
        var _this = this;
        var data = this.props.data
        var style = {}
        style.background = data.get('background')
        style.width = "100%"
        style.height = data.get('height')
        style.paddingTop = data.get('paddingTop')
        var mclass = "col-md-offset-" + data.get('offset') + " col-md-" + data.get('span')


        var memberGroups = []
        var N = _this.props.data.get('members').size
        var L = 0
        for (var i = 0; i < N; i+= 3) {
            memberGroups.push(_this.props.data.get('members').slice(i, i+3))
        }

        return (
            <div style={style}>
                <div className="container-fluid">
                    <div className={mclass}>
                        <div className="row">
                            <div className="col-md-12" style={{textAlign: 'center'}}>
                                <h3 style={{fontSize: 35}}>{renderHTML(data.get('title'))}</h3>
                            </div>
                        </div>
                        {
                            memberGroups.map(function(memberGroup, i) {
                                return (
                                    <div className="row">
                                        {
                                            memberGroup.map(function(member, i) {
                                                return (
                                                    <div className="col-md-4" style={{ textAlign: 'center', paddingTop: 20 }}>
                                                        <div className="c-center" style={{ }}>
                                                            <img className="img-responsive img-circle" style={{ width: "75%", marginLeft: 'auto', marginRight: 'auto'}} src={ member.image }/>
                                                            <br/>
                                                            <h3 className="c-font-bold c-font-20">{ renderHTML(member.name) }</h3>
                                                            <p>{ renderHTML(member.job) }</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
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

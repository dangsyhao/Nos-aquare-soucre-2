import React, {Component} from 'react';

class View extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      // this.props.action.load();
    }
    render() {
        var _this = this;
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label>Text</label>
                            <div>
                                <input className="form-control" name="text" onChange={e => this.props.action.changeValue(e)}></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label>
                            &nbsp;
                        </label>
                        <div className="form-group">
                            <a href="javascript:;"
                                style={{marginTop: '2px'}}
                                className="btn btn-sm btn-primary"
                                onClick={() => this.props.action.search(this.props)}>Apply</a>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default View;

import React, {Component} from 'react';
import jQuery from 'jquery';

class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'is_loading': true,
            'build':      '',
        }
    }

    componentWillMount() {
        var _this = this;

        jQuery.ajax({
            type: 'GET',
            url:  '/_debug/api/server',
            dataType: 'json',
            success: function(result) {
                _this.setState({
                    is_loading: false,
                    build:      result.build
                })
            },
            error: function(data) {
                _this.setState({
                    is_loading: false,
                    message: "Can't load plugin list"
                })
            }
        })

    }

    render() {
        var _this = this;
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Debug</a>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="starter-template">
                        <h4>BUILD</h4>
                        <pre>{this.state.build}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default View;

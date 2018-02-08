import React, {Component} from 'react';

class View extends Component {
    changeValue(e) {
        var options = e.target.options;
        var values = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }

        this.props.action.changeValue(
            this.props.data.get('id'),
            values
        );
    }
    render() {
        var _this = this;
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <select
                    className={this.props.class ? this.props.class: "form-control"}
                    id={this.props.data.get('id')}
                    value={this.props.data.get('value')}
                    multiple="multiple"
                    onChange={e => this.changeValue(e)}
                >
                    {
                        this.props.data.get('choices').map(function(choice, i) {
                            return <option value={choice.value} key={_this.props.data.get('id') + '-' + i}>{choice.label}</option>
                        })
                    }
                </select>
                <span className="help-block" style={{ color: 'red'}}>{this.props.data.get('error')}</span>
            </div>
        )
    }
}

export default View;

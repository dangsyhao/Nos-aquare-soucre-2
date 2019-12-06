import React, {Component} from 'react';
import { translate } from 'react-i18next';


class View extends Component {
    changeValue(e) {
        this.props.action.changeValue(
            this.props.data.get('id'),
            e.target.value
        );
    }
    render() {
        var t = this.props.t;
        var _this = this;
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <select
                    className={this.props.class ? this.props.class: "form-control"}
                    id={this.props.data.get('id')}
                    value={this.props.data.get('value')}
                    onChange={e => this.changeValue(e)}
                >
                    {
                        this.props.data.get('choices').map(function(choice, i) {
                            return <option value={choice.value} key={_this.props.data.get('id') + '-' + i}>{choice.label}</option>
                        })
                    }
                </select>
                <span className="help-block" style={{ color: 'red'}}>{t(this.props.data.get('error'))}</span>
            </div>
        )
    }
}

export default translate()(View);

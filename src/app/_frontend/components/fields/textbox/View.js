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
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <input
                    className={this.props.class ? this.props.class: "form-control"}
                    type="text"
                    id={this.props.data.get('id')}
                    value={this.props.data.get('value')}
                    placeholder={this.props.placeholder}
                    onChange={e => this.changeValue(e)}
                />
                <span className="help-block" style={{ color: 'red'}}>{t(this.props.data.get('error'))}</span>
            </div>
        )
    }
}

export default translate()(View);

import React, {Component} from 'react';
import { translate } from 'react-i18next';
import DatePicker from 'react-bootstrap-date-picker';

class View extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value, formatterValue) {
        this.props.action.changeValue(
            this.props.data.get('id'),
            value
        );
    }
    render() {
        var t = this.props.t;
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <DatePicker
                    id={this.props.data.get('id')}
                    value={this.props.data.get('value')}
                    onChange={this.onChange}
                />
                <span className="help-block" style={{ color: 'red'}}>{t(this.props.data.get('error'))}</span>
            </div>
        )
    }
}

export default translate()(View);

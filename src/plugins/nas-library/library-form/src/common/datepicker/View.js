import React, {Component} from 'react';
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
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''} style={{ width: 190}}>
                <DatePicker
                    id={this.props.data.get('id')}
                    value={this.props.data.get('value')}
                    onChange={this.onChange}
                />
                <span className="help-block" style={{ color: 'red'}}>{this.props.data.get('error')}</span>
            </div>
        )
    }
}

export default View;

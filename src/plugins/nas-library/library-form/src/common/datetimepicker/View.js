import React, {Component} from 'react';
import DateTimePicker from 'react-bootstrap-datetimepicker';
import moment from "moment";
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
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <DateTimePicker
                    id={this.props.data.get('id')}
                    inputFormat="MM/DD/YYYY HH:mm:ss"
                    onChange={this.onChange}
                    dateTime={this.props.data.get('value')}
                    defaultText="Please select a date"
                />
                <span className="help-block" style={{ color: 'red'}}>{this.props.data.get('error')}</span>
            </div>
        )
    }
}

export default View;

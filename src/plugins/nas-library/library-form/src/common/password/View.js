import React, {Component} from 'react';

class View extends Component {
    changeValue(e) {
        this.props.action.changeValue(
            this.props.data.get('id'),
            e.target.value
        );
    }
    render() {
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <input
                    className={this.props.class ? this.props.class: "form-control"}
                    type="password"
                    id={this.props.data.get('id')}
                    value={this.props.data.get('value')}
                    placeholder={this.props.placeholder}
                    onChange={e => this.changeValue(e)}
                />
                <span className="help-block" style={{ color: 'red'}}>{this.props.data.get('error')}</span>
            </div>
        )
    }
}

export default View;

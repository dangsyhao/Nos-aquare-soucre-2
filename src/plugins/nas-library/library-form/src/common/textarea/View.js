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
                <textarea
                    className={this.props.class ? this.props.class: "form-control"}
                    id={this.props.data.get('id')}
                    type="text"
                    rows={this.props.rows}
                    value={this.props.data.get('value')}
                    onChange={e => this.changeValue(e)}
                />
                <span className="help-block" style={{ color: 'red'}}>{this.props.data.get('error')}</span>
            </div>
        )
    }
}

export default View;

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
            <input
                className="form-control"
                type="hidden"
                id={this.props.data.get('id')}
                value={this.props.data.get('value')}
                placeholder={this.props.placeholder}
                onChange={e => this.changeValue(e)}
            />
        )
    }
}

export default View;

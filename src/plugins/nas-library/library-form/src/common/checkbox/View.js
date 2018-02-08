import React, {Component} from 'react';


class View extends Component {
    changeValue(e) {
        this.props.action.changeValue(
            this.props.data.get('id'),
            e.target.checked
        );
    }

    render() {
        return (
            <div>
                <label className="mt-checkbox mt-checkbox-outline">
                    <input
                        id={this.props.data.get('id')}
                        type="checkbox"
                        checked={this.props.data.get('value') ? "checked" : '' }
                        onChange={e => this.changeValue(e)}
                    />
                    <span></span>
                </label>
            </div>
        )
    }
}

export default View;

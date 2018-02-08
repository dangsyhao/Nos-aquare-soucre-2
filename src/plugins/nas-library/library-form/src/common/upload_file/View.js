import React, {Component} from 'react';

class View extends Component {
    changeValue(e) {
        this.props.action.changeValue(
            this.props.data.get('id'),
            e.target.files[0]
        );
    }
    render() {
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <input
                    className={this.props.class ? this.props.class: "form-control"}
                    type="file"
                    id={this.props.data.get('id')}
                    onChange={e => this.changeValue(e)}
                    accept={this.props.accept}
                />
                <span className="help-block" style={{ color: 'red'}}>{this.props.data.get('error')}</span>
            </div>
        )
    }
}

export default View;

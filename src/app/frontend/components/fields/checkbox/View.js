import React, {Component} from 'react';
import { translate } from 'react-i18next';

class View extends Component {
    changeValue() {
        this.props.action.changeValue(
            this.props.data.get('id'),
            !this.props.data.get('value')
        );
    }

    render() {
        var t = this.props.t;
        return (
            <div className="c-checkbox">
                <input
                  id={this.props.data.get('id')}
                  type="checkbox"
                  checked={this.props.data.get('value') ? "checked" : '' }
                  className="c-check">
                </input>
                <label for="checkbox1-11" style={{color: '#a6a6a6'}} onClick={()=>this.changeValue()}>
                  <span className="inc"></span>
                  <span className="check"></span>
                  <span className="box"></span>
                    {this.props.text}
                </label>
                <span className="help-block" style={{ color: 'red'}}>{t(this.props.data.get('error'))}</span>
            </div>
        )
    }
}

export default translate()(View);

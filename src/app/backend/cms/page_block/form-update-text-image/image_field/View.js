import React, {Component} from 'react';

class View extends Component {
    changeField(fieldName, index, data) {
        var value = this.props.data.get('value').toJS();
        value[index][fieldName] = data;

        this.props.action.changeValue(this.props.data.get('id'), value);
    }
    deleteRow(index) {
        var value = this.props.data.get('value').toJS();
        value.splice(index, 1)
        this.props.action.changeValue(this.props.data.get('id'), value);
    }
    addNewRow() {
        var value = this.props.data.get('value').toJS();
        value.push({
            'url':          '',
        })
        this.props.action.changeValue(this.props.data.get('id'), value);
    }

    render() {
        var _this = this;
        return (
            <div className={this.props.data.get('error') != '' ? "has-error" : ''}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="90%">URL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        _this.props.data.get('value').map(function(record, i) {
                            return (
                                <tr key={_this.props.data.get('id') + "-row-" + i}>
                                    <td>
                                        <input type="text" className="form-control" value={record.url} onChange={e => _this.changeField('url', i, e.target.value)}></input>
                                    </td>

                                    <td>
                                        <a onClick={e => _this.deleteRow(i)} className="btn btn-xs btn-danger">Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colSpan={3}>
                            <a onClick={e => _this.addNewRow()} className="btn btn-xs btn-info">Add new row</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <span className="help-block" style={{ color: 'red'}}>{this.props.data.get('error')}</span>
            </div>
        )
    }
}

export default View;

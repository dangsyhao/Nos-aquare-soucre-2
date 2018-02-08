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
            'text':       '',
            'x':          '',
            'y':          '',
            'width':      ''
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
                            <th width="60%">Text</th>
                            <th width="10%">X</th>
                            <th width="10%">Y</th>
                            <th width="10%">Width</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        _this.props.data.get('value').map(function(record, i) {
                            return (
                                <tr key={_this.props.data.get('id') + "-row-" + i}>
                                    <td>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={record.text}
                                            onChange={e => _this.changeField('text', i, e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={record.x}
                                            onChange={e => _this.changeField('x', i, e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={record.y}
                                            onChange={e => _this.changeField('y', i, e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={record.width}
                                            onChange={e => _this.changeField('width', i, e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <a onClick={e => _this.deleteRow(i)} className="btn btn-xs btn-danger">Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colSpan={5}>
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

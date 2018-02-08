import React, {Component} from 'react';
import LibraryDataTable from 'library-data-table';

class View extends LibraryDataTable.View {
    renderTableHeader() {
        return <thead>
            <tr>
                <th width="5%">ID</th>
                <th width="15%">Code</th>
                <th width="70%">English</th>
                <th></th>
            </tr>
        </thead>
    }
    renderTableBody() {
        var _this = this;
        return (
            <tbody>
                {
                    this.props.dataTable.get('records').map(function(record, i) {
                        return (<tr key={"record-" + i}>
                            <td>{ record.id }</td>
                            <td>{ record.code }</td>
                            <td>{ record.en }</td>
                            <td>
                                <a className="btn btn-xs btn-primary" href={"/backend/text_block/update?id=" + record.id}>Edit</a>
                                <a className="btn btn-xs btn-danger" onClick={e=> _this.props.action.delete(_this.props,record.id)}>Delete</a>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        )
    }
}

export default View;

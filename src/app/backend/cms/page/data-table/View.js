import React, {Component} from 'react';
import LibraryDataTable from 'library-data-table';

class View extends LibraryDataTable.View {
    renderTableHeader() {
        return <thead>
            <tr>
                <th width="5%">ID</th>
                <th width="20%">Title</th>
                <th width="20%">URL</th>
                <th width="45%">Description</th>
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
                            <td>{ record.title }</td>
                            <td>{ record.url }</td>
                            <td>{ record.description }</td>
                            <td>
                                <a className="btn btn-xs btn-primary" href={"/backend/page/update?id=" + record.id}>Edit</a>
                                <a className="btn btn-xs btn-info" href={"/backend/page/view?id=" + record.id}>View</a>
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

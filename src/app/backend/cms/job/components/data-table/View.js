import React, {Component} from 'react';
import LibraryDataTable from 'library-data-table';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';


class View extends LibraryDataTable.View {
    renderTableHeader() {
        return <thead>
            <tr>
                <th width="5%">ID</th>
                <th width="20%">Title</th>
                <th width="60%">Location</th>
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
                            <td>{ record.location }</td>
                            <td>
                                <a href={"/backend/job/update?id=" + record.id}>Edit</a>&nbsp;|&nbsp;
                                <a href={"javascript:;"} onClick={e=> _this.props.action.delete(_this.props,record.id)}>Delete</a>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        )
    }
}

export default View;

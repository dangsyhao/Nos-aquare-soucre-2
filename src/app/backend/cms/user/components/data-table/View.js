import React, {Component} from 'react';
import LibraryDataTable from 'library-data-table';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';


class View extends LibraryDataTable.View {
    renderTableHeader() {
        return <thead>
            <tr>
                <th width="5%">ID</th>
                <th width="45%">Username</th>
                <th width="30%">Fullname</th>
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
                            <td>{ record.username }</td>
                            <td>{ record.fullname }</td>
                            <td>
                                <a href={"/backend/user/update?id=" + record.id}>Edit</a>&nbsp;|&nbsp;
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
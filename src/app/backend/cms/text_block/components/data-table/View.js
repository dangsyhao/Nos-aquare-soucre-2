import React, {Component} from 'react';
import LibraryDataTable from 'library-data-table';

class View extends LibraryDataTable.View {
    renderTableHeader() {
        return <thead>
            <tr>
                <th width="20%">Code</th>
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
                            <td>{ record.code }</td>
                            <td style={{ whiteSpace: 'pre-line' }}>{ record.en }</td>
                            <td>
                                <a href={"/backend/text_block/update?id=" + record.id}>Edit</a>&nbsp;|&nbsp;
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

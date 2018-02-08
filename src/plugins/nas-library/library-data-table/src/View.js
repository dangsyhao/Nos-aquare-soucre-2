import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import Constants from './Constants';

class View extends Component {
    render() {
        return (
            <BlockUi tag="div" blocking={!this.props.dataTable.get('isReady')}>
                <div>
                    { this.renderMessages() }
                </div>
                <div>
                    { this.renderTable() }
                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-5">
                        { this.renderStatus() }
                    </div>
                    <div className="col-md-7 col-sm-7">
                        { this.renderPaginator() }
                    </div>
                </div>
            </BlockUi>
        )
    }

    renderMessages() {
        return (
            <div>
            {
                this.props.dataTable.get('messages').map(function(message, i) {
                    switch (message.type) {
                        case 'error':
                            return (<div className="alert alert-danger" role="alert">{message.message}</div>)
                    }
                    return (<div className="alert alert-info" role="alert">{message.message}</div>)
                })
            }
            </div>
        )
    }

    renderStatus() {
        var currentPage = this.props.dataTable.get('currentPage');
        var recordPerPage = this.props.dataTable.get('recordPerPage');
        var totalRecords = this.props.dataTable.get('totalRecords');
        var totalPage = Math.ceil(totalRecords / recordPerPage);
        var pageIndexFrom = (currentPage-1) * recordPerPage + 1;
        var pageIndexTo = Math.min(currentPage * recordPerPage, totalRecords);

        return <div className="dataTables_info" role="status" aria-live="polite">Showing {pageIndexFrom} to {pageIndexTo} of {this.props.dataTable.get('totalRecords')} records</div>
    }

    renderTable() {
        return (
            <table className="table table-striped table-bordered table-hover">
                { this.renderTableHeader() }
                { this.renderTableBody() }
            </table>
        )
    }

    renderTableHeader() {
        return (<thead><tr><th></th></tr></thead>)
    }
    renderTableBody() {
        return (<tbody><tr><td></td></tr></tbody>)
    }

    renderPaginator() {
        var currentPage = this.props.dataTable.get('currentPage');
        var recordPerPage = this.props.dataTable.get('recordPerPage');
        var totalRecords = this.props.dataTable.get('totalRecords');
        var totalPage = Math.ceil(totalRecords / recordPerPage);
        var pageIndexFrom = (currentPage-1) * recordPerPage + 1;
        var pageIndexTo = Math.min(currentPage * recordPerPage, totalRecords);

        return (
            <ul className="pagination" style={{ visibility: 'visible' }}>
                <li className="prev"><a onClick={e => this.props.action.changePage(this.props, 1)} title="First"><span aria-hidden="true">&laquo;</span></a></li>
                { currentPage-2 > 0 ? <li><a onClick={ e => this.props.action.changePage(this.props, currentPage-2)}>{currentPage-2}</a></li> : '' }
                { currentPage-1 > 0 ? <li><a onClick={ e => this.props.action.changePage(this.props, currentPage-1)}>{currentPage-1}</a></li> : '' }
                <li className="active"><a onClick={ e => this.props.action.changePage(this.props, currentPage)}>{currentPage}</a></li>
                { currentPage+1 <= totalPage ? <li><a onClick={ e => this.props.action.changePage(this.props, currentPage+1)}>{currentPage+1}</a></li> : '' }
                { currentPage+2 <= totalPage ? <li><a onClick={ e => this.props.action.changePage(this.props, currentPage+2)}>{currentPage+2}</a></li> : '' }
                <li className="next"><a onClick={e => this.props.action.changePage(this.props, totalPage)} title="Last"><span aria-hidden="true">&raquo;</span></a></li>
            </ul>
        )
    }

    componentDidMount() {
        if (this.props.dataTable.get('dataStatus') == Constants.DATA_STATUS_INVALID) {
            this.props.action.loadRecords(this.props);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.dataTable.get('dataStatus') == Constants.DATA_STATUS_INVALID) {
            this.props.action.loadRecords(this.props);
        }
    }
}

export default View;

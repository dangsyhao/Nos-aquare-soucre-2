import React from "react";

class View extends React.Component {

    constructor() {
        super();
        this.handleButton= this.handleButton.bind(this);
    }

    handleButton(){
        this.props.action.addNewText('Đã Cập Nhật Status --> OK');
    }

    render() {
        var status = this.props.data.get('status');
        return(
            <div>
                <p>{status}</p>
                <button onClick={this.handleButton}>CLick To Update Status</button>
            </div>
        )
    }
}

export default View
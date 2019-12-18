import Action from './Action';
import React from "react";
import Store from './store'

class View extends React.Component {

    constructor() {
        super();
        this.handleText = this.handleText.bind(this);
        this.state = {status:Store.getStatus()};
        this._onchange = this._onchange.bind(this)
    }

    componentDidMount() {
        Store.addChangeListener(this._onchange);
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onchange);
    }

    handleText(){
        return Action.addNewText('ĐÃ CẬP NHẬT STATUS -> OK')
    }

    _onchange(){
        this.setState({status:Store.getStatus()});
    }

    render() {
        return(

            <div>
                <p>{this.state.status}</p>
                <button onClick={this.handleText}>CLick To Update Status</button>
            </div>
        )
    }
}

export default View
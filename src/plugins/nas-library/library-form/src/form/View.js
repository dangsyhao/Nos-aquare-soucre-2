import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import Constants from './Constants';

class View extends Component {
    render() {
        return <h1>Form View</h1>
    }

    componentWillMount() {
        this.props.action.load();
    }
}

export default View;

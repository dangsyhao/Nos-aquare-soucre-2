
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import DebugView from './../views/DebugView';

import './index.css';

jQuery(document).ready(function() {
    ReactDOM.render(
        <DebugView />,
        document.getElementById('root')
    )
});

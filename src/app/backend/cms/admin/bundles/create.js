
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CreateContainer from './../containers/CreateContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <CreateContainer />,
        document.getElementById('root')
    )
});

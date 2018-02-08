
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import ViewContainer from './../ViewContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <ViewContainer />,
        document.getElementById('root')
    )
});

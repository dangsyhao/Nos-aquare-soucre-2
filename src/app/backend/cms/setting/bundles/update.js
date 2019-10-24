
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateContainer from './../UpdateContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateContainer />,
        document.getElementById('root')
    )
});

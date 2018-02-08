
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateTextContainer from './../UpdateTextContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateTextContainer />,
        document.getElementById('root')
    )
});

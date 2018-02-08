
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdatePageListingContainer from './../UpdatePageListingContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdatePageListingContainer />,
        document.getElementById('root')
    )
});

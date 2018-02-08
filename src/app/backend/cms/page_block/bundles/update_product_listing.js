
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateProductListingContainer from './../UpdateProductListingContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateProductListingContainer />,
        document.getElementById('root')
    )
});

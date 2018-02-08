
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateEffectiveListingContainer from './../UpdateEffectiveListingContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateEffectiveListingContainer />,
        document.getElementById('root')
    )
});

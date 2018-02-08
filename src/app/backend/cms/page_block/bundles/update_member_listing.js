
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateMemberListingContainer from './../UpdateMemberListingContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateMemberListingContainer />,
        document.getElementById('root')
    )
});

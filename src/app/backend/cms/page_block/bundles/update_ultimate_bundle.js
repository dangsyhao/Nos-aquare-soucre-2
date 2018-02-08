
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateUltimateBundleContainer from './../UpdateUltimateBundleContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateUltimateBundleContainer />,
        document.getElementById('root')
    )
});

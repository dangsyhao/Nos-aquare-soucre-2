
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateHorizontalStepContainer from './../UpdateHorizontalStepContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateHorizontalStepContainer />,
        document.getElementById('root')
    )
});

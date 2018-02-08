
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateSliderContainer from './../UpdateSliderContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateSliderContainer />,
        document.getElementById('root')
    )
});

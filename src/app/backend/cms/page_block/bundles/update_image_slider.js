
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateImageSliderContainer from './../UpdateImageSliderContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateImageSliderContainer />,
        document.getElementById('root')
    )
});

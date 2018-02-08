
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateBannerContainer from './../UpdateBannerContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateBannerContainer />,
        document.getElementById('root')
    )
});

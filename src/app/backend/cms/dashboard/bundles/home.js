
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import HomeContainer from './../HomeContainer'

import 'backend-page-container/styles/default.css'

if (loggedIn()) {
    jQuery(document).ready(function() {
        ReactDOM.render(
            <HomeContainer />,
            document.getElementById('root')
        )
    });
}
else {
    window.location = '';
}

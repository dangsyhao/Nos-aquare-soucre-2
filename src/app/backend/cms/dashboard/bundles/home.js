
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import HomeContainer from './../containers/HomeContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <HomeContainer />,
        document.getElementById('root')
    )
});

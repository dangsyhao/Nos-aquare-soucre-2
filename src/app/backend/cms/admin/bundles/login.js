
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import LoginContainer from './../containers/LoginContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <LoginContainer />,
        document.getElementById('root')
    )
});

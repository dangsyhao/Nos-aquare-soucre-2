
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateTextImageContainer from './../UpdateTextImageContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateTextImageContainer />,
        document.getElementById('root')
    )
});

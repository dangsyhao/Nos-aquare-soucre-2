
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateFashionAICategoryClassificationContainer from './../UpdateFashionAICategoryClassificationContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateFashionAICategoryClassificationContainer />,
        document.getElementById('root')
    )
});

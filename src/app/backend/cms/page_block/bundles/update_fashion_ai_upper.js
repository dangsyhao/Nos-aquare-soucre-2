
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateFashionAIUpperContainer from './../UpdateFashionAIUpperContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateFashionAIUpperContainer />,
        document.getElementById('root')
    )
});


import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateFashionAIClothDetectionContainer from './../UpdateFashionAIClothDetectionContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateFashionAIClothDetectionContainer />,
        document.getElementById('root')
    )
});

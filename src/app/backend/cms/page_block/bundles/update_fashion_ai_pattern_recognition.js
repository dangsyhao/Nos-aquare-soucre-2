
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateFashionAIPatternRecognitionContainer from './../UpdateFashionAIPatternRecognitionContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateFashionAIPatternRecognitionContainer />,
        document.getElementById('root')
    )
});

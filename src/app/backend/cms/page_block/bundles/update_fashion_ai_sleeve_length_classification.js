
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateFashionAISleeveLengthClassificationContainer from './../UpdateFashionAISleeveLengthClassificationContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateFashionAISleeveLengthClassificationContainer />,
        document.getElementById('root')
    )
});


import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateYourMicronutrientNeedContainer from './../UpdateYourMicronutrientNeedContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateYourMicronutrientNeedContainer />,
        document.getElementById('root')
    )
});

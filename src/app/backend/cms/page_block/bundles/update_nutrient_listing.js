
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateNutrientListingContainer from './../UpdateNutrientListingContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateNutrientListingContainer />,
        document.getElementById('root')
    )
});

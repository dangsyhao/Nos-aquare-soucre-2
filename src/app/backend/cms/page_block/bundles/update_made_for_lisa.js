
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import UpdateMadeForLisaContainer from './../UpdateMadeForLisaContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <UpdateMadeForLisaContainer />,
        document.getElementById('root')
    )
});

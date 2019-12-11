
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import ListContainer from './../containers/ListContainer'

import 'backend-page-container/styles/default.css'

jQuery(document).ready(function() {
    ReactDOM.render(
        <ListContainer />,
        document.getElementById('root')
    )
});

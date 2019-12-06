
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/container/style.css';
import HomeContainer from './../containers/HomeContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <HomeContainer />,
        document.getElementById('root')
    )
});

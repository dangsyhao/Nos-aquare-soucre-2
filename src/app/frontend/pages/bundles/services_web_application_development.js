
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import ServicesWebApplicationDevelopmentContainer from './../containers/ServicesWebApplicationDevelopmentContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <ServicesWebApplicationDevelopmentContainer />,
        document.getElementById('root')
    )
});


import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import ServicesBusinessProcessOptimizationContainer from './../containers/ServicesBusinessProcessOptimizationContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <ServicesBusinessProcessOptimizationContainer />,
        document.getElementById('root')
    )
});

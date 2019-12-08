
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import AboutUsTheInvestorContainer from './../containers/AboutUsTheInvestorContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <AboutUsTheInvestorContainer />,
        document.getElementById('root')
    )
});

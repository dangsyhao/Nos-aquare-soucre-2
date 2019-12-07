
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import AboutUsPortfolioContainer from './../containers/AboutUsPortfolioContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <AboutUsPortfolioContainer />,
        document.getElementById('root')
    )
});

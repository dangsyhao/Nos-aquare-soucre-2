
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import ProductQuodbitOnboardingContainer from './../containers/ProductQuodbitOnboardingContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <ProductQuodbitOnboardingContainer />,
        document.getElementById('root')
    )
});

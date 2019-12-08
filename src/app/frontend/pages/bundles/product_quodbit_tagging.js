
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'frontend-components/page-container/style.css';
import ProductQuodbitTaggingContainer from './../containers/ProductQuodbitTaggingContainer';

jQuery(document).ready(function() {
    ReactDOM.render(
        <ProductQuodbitTaggingContainer />,
        document.getElementById('root')
    )
});
